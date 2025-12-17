import { useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useHashnodePosts } from '../hooks/useHashnodePosts'

// Configuración: Reemplaza con tu username de Hashnode
// Ejemplo: 'randradedev' si tu blog es hashnode.com/@randradedev
// O 'roberto-andrade' si tu blog es roberto-andrade.hashnode.dev
const HASHNODE_HOSTNAME = import.meta.env.VITE_HASHNODE_HOSTNAME || 'randradedev'

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (diffInSeconds < 60) return 'Hace unos momentos'
  if (diffInSeconds < 3600) return `Hace ${Math.floor(diffInSeconds / 60)} minutos`
  if (diffInSeconds < 86400) return `Hace ${Math.floor(diffInSeconds / 3600)} horas`
  if (diffInSeconds < 604800) return `Hace ${Math.floor(diffInSeconds / 86400)} días`
  if (diffInSeconds < 2592000) return `Hace ${Math.floor(diffInSeconds / 604800)} semanas`
  if (diffInSeconds < 31536000) return `Hace ${Math.floor(diffInSeconds / 2592000)} meses`
  return `Hace ${Math.floor(diffInSeconds / 31536000)} años`
}

function getPostUrl(slug: string): string {
  // Usar el subdominio personalizado de Hashnode
  return `https://${HASHNODE_HOSTNAME}.hashnode.dev/${slug}`
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const { posts, loading, error, hostname } = useHashnodePosts({ limit: 20 })

  // Obtener todas las etiquetas únicas de los posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    posts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag.name))
    })
    return Array.from(tagSet).sort()
  }, [posts])

  // Filtrar posts según búsqueda y etiqueta
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.brief.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesTag = selectedTag === null || 
        post.tags.some(tag => tag.name === selectedTag)
      
      return matchesSearch && matchesTag
    })
  }, [posts, searchQuery, selectedTag])

  // Post destacado (el primero o el más reciente)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null
  const regularPosts = filteredPosts.slice(1)

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-black">
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 pt-24">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            {/* Page Heading & Search */}
            <div className="flex flex-col gap-6 pb-10">
              <div className="flex flex-wrap justify-between items-end gap-6">
                <div className="flex max-w-2xl flex-col gap-3">
                  <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                    Inteligencia Artificial para <span className="text-primary">Resultados Reales</span>
                  </h1>
                  <p className="text-text-muted text-lg font-normal leading-normal">
                    Estrategias de IA generativa aplicadas a la educación y el marketing. Sin humo, solo impacto.
                  </p>
                </div>
                {/* Search Bar */}
                <div className="w-full max-w-md">
                  <label className="flex flex-col h-12 w-full group">
                    <div className="flex w-full flex-1 items-stretch rounded-full h-full border border-border-dark group-focus-within:border-primary transition-colors">
                      <div className="text-text-muted flex bg-surface-dark items-center justify-center pl-4 rounded-l-full border-r-0">
                        <span className="material-symbols-outlined">search</span>
                      </div>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-white focus:outline-0 focus:ring-0 border-none bg-surface-dark focus:border-none h-full placeholder:text-text-muted/70 px-4 pl-2 text-base font-normal leading-normal"
                        placeholder="Buscar artículos, guías o temas..."
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </label>
                </div>
              </div>
              {/* Filter Chips */}
              <div className="flex gap-3 flex-wrap pt-4">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-transform hover:scale-105 ${
                    selectedTag === null
                      ? 'bg-primary text-white'
                      : 'bg-surface-dark border border-border-dark hover:border-primary text-white hover:text-primary'
                  }`}
                >
                  <p className={`text-sm ${selectedTag === null ? 'font-bold' : 'font-medium'} leading-normal`}>
                    Todos
                  </p>
                </button>
                {allTags.slice(0, 4).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${
                      selectedTag === tag
                        ? 'bg-primary text-white'
                        : 'bg-surface-dark border border-border-dark hover:border-primary text-white hover:text-primary'
                    }`}
                  >
                    <p className={`text-sm ${selectedTag === tag ? 'font-bold' : 'font-medium'} leading-normal`}>
                      {tag}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Content */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                {loading && (
                  <div className="flex items-center justify-center py-20">
                    <div className="text-text-muted">Cargando artículos...</div>
                  </div>
                )}

                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-6">
                    <p className="text-red-400 font-bold mb-2">Error al cargar los artículos:</p>
                    <p className="text-red-300 mb-4">{error}</p>
                    <div className="bg-surface-dark rounded-lg p-4 mt-4">
                      <p className="text-text-muted text-sm mb-2">Información de depuración:</p>
                      <ul className="text-text-muted text-xs space-y-1">
                        <li>• Hostname configurado: <span className="text-white font-mono">{hostname}</span></li>
                        <li>• Verifica que el archivo <span className="text-white font-mono">.env</span> contenga: <span className="text-white font-mono">VITE_HASHNODE_HOSTNAME=tu-hostname</span></li>
                        <li>• El hostname debe ser solo el nombre (ej: "roberto-andrade"), sin "https://" ni ".hashnode.dev"</li>
                        <li>• Asegúrate de tener posts publicados en tu blog de Hashnode</li>
                        <li>• Revisa la consola del navegador (F12) para más detalles</li>
                      </ul>
                    </div>
                  </div>
                )}

                {!loading && !error && filteredPosts.length === 0 && (
                  <div className="bg-surface-dark border border-border-dark rounded-xl p-12 text-center">
                    <p className="text-text-muted text-lg">
                      No se encontraron artículos que coincidan con tu búsqueda.
                    </p>
                  </div>
                )}

                {!loading && !error && featuredPost && (
                  <>
                    {/* Featured Article (Large Card) */}
                    <a
                      href={getPostUrl(featuredPost.slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-xl bg-surface-dark border border-border-dark hover:border-primary/50 transition-all duration-300 block"
                    >
                      {featuredPost.dateFeatured && (
                        <div className="absolute top-0 right-0 p-4 z-10">
                          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Destacado
                          </span>
                        </div>
                      )}
                      <div className="flex flex-col md:flex-row h-full">
                        {featuredPost.coverImage && (
                          <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                            <div
                              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                              style={{ backgroundImage: `url('${featuredPost.coverImage}')` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark md:bg-gradient-to-r md:from-transparent md:to-surface-dark/20"></div>
                          </div>
                        )}
                        <div className={`w-full ${featuredPost.coverImage ? 'md:w-3/5' : 'md:w-full'} p-6 md:p-8 flex flex-col justify-center gap-4`}>
                          <div className="flex items-center gap-2 text-text-muted text-sm font-medium">
                            {featuredPost.tags.length > 0 && (
                              <>
                                <span className="material-symbols-outlined text-[18px]">category</span>
                                <span>{featuredPost.tags[0].name}</span>
                                <span className="w-1 h-1 rounded-full bg-text-muted"></span>
                              </>
                            )}
                            <span>{featuredPost.readingTime} min lectura</span>
                          </div>
                          <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                            {featuredPost.title}
                          </h3>
                          <p className="text-text-muted text-base font-normal leading-relaxed line-clamp-3">
                            {featuredPost.brief}
                          </p>
                          <div className="pt-2">
                            <span className="flex items-center gap-2 text-white font-bold text-sm group-hover:text-primary transition-colors">
                              Leer artículo completo
                              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                                arrow_forward
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                    
                    {/* Article Grid (2 Columns) */}
                    {regularPosts.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {regularPosts.map((post) => (
                          <a
                            key={post._id}
                            href={getPostUrl(post.slug)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col rounded-xl bg-surface-dark border border-border-dark overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-primary/10"
                          >
                            {post.coverImage && (
                              <div className="h-48 overflow-hidden relative">
                                <div
                                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                  style={{ backgroundImage: `url('${post.coverImage}')` }}
                                ></div>
                              </div>
                            )}
                            <div className="flex flex-col flex-1 p-5 gap-3">
                              <div className="flex justify-between items-center">
                                {post.tags.length > 0 && (
                                  <span className="text-primary text-xs font-bold uppercase tracking-wider">
                                    {post.tags[0].name}
                                  </span>
                                )}
                                <span className="text-text-muted text-xs">
                                  {formatDate(post.dateAdded)}
                                </span>
                              </div>
                              <h4 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                                {post.title}
                              </h4>
                              <p className="text-text-muted text-sm leading-relaxed line-clamp-3 mb-2">
                                {post.brief}
                              </p>
                              <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between">
                                <span className="text-text-muted text-xs font-medium">
                                  {post.readingTime} min lectura
                                </span>
                                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">
                                  arrow_outward
                                </span>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
                
                {/* Pagination / Load More - Puedes implementar paginación más adelante */}
                {!loading && !error && filteredPosts.length > 0 && (
                  <div className="flex justify-center pt-8">
                    <a
                      href={`https://${HASHNODE_HOSTNAME}.hashnode.dev`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-border-dark text-white hover:bg-surface-dark hover:border-primary hover:text-primary transition-all font-medium"
                    >
                      <span className="material-symbols-outlined">open_in_new</span>
                      Ver más en Hashnode
                    </a>
                  </div>
                )}
                
                {/* Newsletter Section (Inline) */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-dark to-background-dark border border-border-dark p-8 md:p-12 mt-8">
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-md">
                      <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                        <span className="material-symbols-outlined text-sm">mail</span>
                        Newsletter
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-2">
                        Un prompt semanal de alto impacto.
                      </h3>
                      <p className="text-text-muted">
                        Recibe cada martes una estrategia de IA lista para copiar y pegar que te ahorrará horas de trabajo.
                      </p>
                    </div>
                    <div className="w-full md:w-auto flex-1 max-w-sm">
                      <form className="flex flex-col gap-3">
                        <input
                          className="w-full px-4 py-3 rounded-xl bg-[#0f180c] border border-border-dark text-white placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          placeholder="tu@email.com"
                          type="email"
                        />
                        <button
                          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-primary/20"
                          type="button"
                        >
                          Suscribirme Gratis
                        </button>
                        <p className="text-center text-xs text-text-muted/60">Sin spam. Date de baja cuando quieras.</p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Sidebar (Sticky) */}
              <aside className="lg:col-span-4 space-y-8">
                <div className="sticky top-24 space-y-8">
                  {/* About Card */}
                  <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">person</span>
                      Sobre el Autor
                    </h4>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-16 h-16 rounded-full bg-cover bg-center shrink-0 border-2 border-primary/30"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCD4ABCNcbO2oLPDnPWgspGH1OdwL8DqhHxuntpIN_J3gMsuDBUt6wnauU_dlflutz5rHHspPO6XPSallo9Bcx7CVRwxGuFYC78Tf3-SptRQ_dkkCep0jMW6C974PHwNw50-BZKWaU8Mo6pl4zE23Cnc_8ogwGt8A0ZwfOpBF4U2sLPiLPHHwUR5ci7pXR7ITASkPg1Xhm3Z1FMUJI5SD_AN6XWpoqM8037Q5BWr-AkYbheJvhr2hJrNtbzUJgRmayAMzVFlBF33cn6')",
                        }}
                      ></div>
                      <div>
                        <p className="text-white font-bold text-sm">Roberto Andrade F.</p>
                        <p className="text-text-muted text-xs mb-2">Exponential Grow AI & Prompt Engineer</p>
                        <p className="text-text-muted text-sm leading-relaxed">
                          Ayudo a empresas y universidades a integrar IA sin fricción.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a
                        className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg bg-border-dark hover:bg-[#36562c] text-white text-sm font-medium transition-colors"
                        href="https://linkedin.com/in/roberto-andrade-f-1338356"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[16px]">link</span> LinkedIn
                      </a>
                      <a
                        className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg bg-border-dark hover:bg-[#36562c] text-white text-sm font-medium transition-colors"
                        href="https://x.com/randrade"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[16px]">alternate_email</span> Twitter
                      </a>
                    </div>
                  </div>
                  
                  {/* Popular/Top Reads */}
                  {posts.length > 0 && (
                    <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
                      <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">trending_up</span>
                        Más Leídos
                      </h4>
                      <div className="flex flex-col gap-4">
                        {posts
                          .sort((a, b) => (b.totalReactions || 0) - (a.totalReactions || 0))
                          .slice(0, 3)
                          .map((post, index) => (
                            <div key={post._id}>
                              <a
                                href={getPostUrl(post.slug)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex gap-3 items-start"
                              >
                                <span className="text-primary font-bold text-lg opacity-50 group-hover:opacity-100">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                <div>
                                  <h5 className="text-white text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                                    {post.title}
                                  </h5>
                                  <span className="text-xs text-text-muted block mt-1">
                                    {post.totalReactions || 0} reacciones
                                  </span>
                                </div>
                              </a>
                              {index < 2 && <div className="h-px w-full bg-white/5 mt-4"></div>}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                  
                  {/* CTA Box */}
                  <div className="relative overflow-hidden rounded-xl bg-primary text-white p-6 shadow-lg shadow-primary/20">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                    <h4 className="font-bold text-xl leading-tight mb-2 relative z-10">
                      ¿Necesitas acelerar tu implementación?
                    </h4>
                    <p className="text-sm font-medium mb-4 opacity-90 relative z-10">
                      Agenda una sesión de diagnóstico gratuita de 15 minutos.
                    </p>
                    <button className="w-full bg-background-dark text-white hover:bg-white hover:text-background-dark font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 relative z-10">
                      <span>Reservar Ahora</span>
                      <span className="material-symbols-outlined text-sm">calendar_month</span>
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  )
}
