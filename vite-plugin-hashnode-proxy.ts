import type { Plugin } from 'vite'
import type { IncomingMessage, ServerResponse } from 'http'

export function hashnodeProxy(): Plugin {
  return {
    name: 'hashnode-proxy',
    configureServer(server) {
      console.log('🔧 Plugin hashnode-proxy cargado')
      
      // Usar un middleware que se ejecute antes que otros
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith('/api/hashnode')) {
          console.log('📥 Interceptando petición a:', req.url, req.method)
          return handleHashnodeRequest(req as IncomingMessage, res as ServerResponse)
        }
        next()
      })
    },
  }
}

function handleHashnodeRequest(req: IncomingMessage, res: ServerResponse) {
  // Handle OPTIONS requests for CORS
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    })
    return res.end()
  }

  // Handle POST requests
  if (req.method === 'POST') {
    try {
      const body: Buffer[] = []
      
      req.on('data', (chunk: Buffer) => {
        body.push(chunk)
      })
      
      req.on('end', async () => {
        try {
          const requestBody = Buffer.concat(body).toString()
          console.log('🔄 Proxy: Enviando petición a Hashnode API...')
          
          const response = await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: requestBody,
          })

          const data = await response.json()
          console.log('✅ Proxy: Respuesta recibida de Hashnode')
          
          res.writeHead(response.status, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          })
          
          res.end(JSON.stringify(data))
        } catch (error) {
          console.error('❌ Proxy error:', error)
          res.writeHead(500, { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          })
          res.end(JSON.stringify({ 
            error: 'Proxy error', 
            message: error instanceof Error ? error.message : 'Unknown error' 
          }))
        }
      })
      
      req.on('error', (error) => {
        console.error('❌ Request error:', error)
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Request error' }))
      })
    } catch (error) {
      console.error('❌ Middleware error:', error)
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Middleware error' }))
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Method not allowed' }))
  }
}
