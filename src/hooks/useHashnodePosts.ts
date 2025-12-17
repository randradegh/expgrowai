import { useState, useEffect } from 'react'
import type { HashnodePost } from '../types/hashnode'

// Configuración: Reemplaza con tu username de Hashnode
// Ejemplo: 'randradedev' si tu blog es hashnode.com/@randradedev
// O 'roberto-andrade' si tu blog es roberto-andrade.hashnode.dev
const HASHNODE_HOSTNAME = import.meta.env.VITE_HASHNODE_HOSTNAME || 'randradedev'
// Usar proxy local en desarrollo, en producción usar función serverless de Vercel
const HASHNODE_API = '/api/hashnode'

interface UseHashnodePostsOptions {
  limit?: number
  page?: number
}

export function useHashnodePosts(options: UseHashnodePostsOptions = {}) {
  const { limit = 20, page = 0 } = options
  const [posts, setPosts] = useState<HashnodePost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        setError(null)

        console.log('🔍 Intentando obtener posts de Hashnode...')
        console.log('📝 Hostname configurado:', HASHNODE_HOSTNAME)

        const query = `
          query GetUserPosts($username: String!, $first: Int!) {
            user(username: $username) {
              publications(first: 1) {
                edges {
                  node {
                    posts(first: $first) {
                      edges {
                        node {
                          id
                          title
                          slug
                          brief
                          coverImage {
                            url
                          }
                          publishedAt
                          reactionCount
                          responseCount
                          readTimeInMinutes
                          tags {
                            name
                            slug
                          }
                          author {
                            username
                            name
                            profilePicture
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `

        const variables = {
          username: HASHNODE_HOSTNAME,
          first: limit,
        }

        console.log('📤 Enviando consulta a Hashnode API...', { variables })

        const response = await fetch(HASHNODE_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables,
          }),
        })

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        console.log('📥 Respuesta de Hashnode:', data)

        if (data.errors) {
          const errorMessage = data.errors[0]?.message || 'Error en la consulta de Hashnode'
          console.error('❌ Error de Hashnode:', data.errors)
          throw new Error(errorMessage)
        }

        if (!data.data?.user) {
          throw new Error(`No se encontró el usuario "${HASHNODE_HOSTNAME}". Verifica que el hostname sea correcto.`)
        }

        if (!data.data.user.publications?.edges || data.data.user.publications.edges.length === 0) {
          throw new Error(`El usuario "${HASHNODE_HOSTNAME}" no tiene publicaciones configuradas.`)
        }

        // Extraer posts de la nueva estructura de la API
        const publication = data.data.user.publications.edges[0]?.node
        if (!publication?.posts?.edges) {
          console.warn('⚠️ No se encontraron posts. Asegúrate de tener posts publicados en Hashnode.')
          setPosts([])
          return
        }

        // Mapear la estructura nueva a la estructura esperada
        const posts = publication.posts.edges.map((edge: any) => {
          const post = edge.node
          return {
            _id: post.id,
            title: post.title,
            slug: post.slug,
            brief: post.brief || '',
            coverImage: post.coverImage?.url,
            dateAdded: post.publishedAt,
            totalReactions: post.reactionCount || 0,
            replyCount: 0,
            responseCount: post.responseCount || 0,
            readingTime: post.readTimeInMinutes || 0,
            tags: post.tags || [],
            author: {
              username: post.author?.username || '',
              name: post.author?.name || '',
              photo: post.author?.profilePicture || '',
            },
          }
        })

        console.log(`✅ Se obtuvieron ${posts.length} posts`)
        setPosts(posts)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido'
        setError(errorMessage)
        console.error('❌ Error fetching Hashnode posts:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [limit, page])

  return { posts, loading, error, hostname: HASHNODE_HOSTNAME }
}

