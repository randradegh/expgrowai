import type { Plugin } from 'vite'
import type { IncomingMessage, ServerResponse } from 'http'

export function contactPlugin(): Plugin {
  return {
    name: 'contact-plugin',
    configureServer(server) {
      console.log('🔧 Plugin contact-plugin cargado')
      
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith('/api/contact')) {
          console.log('📥 Interceptando petición a:', req.url, req.method)
          return handleContactRequest(req as IncomingMessage, res as ServerResponse)
        }
        next()
      })
    },
  }
}

function handleContactRequest(req: IncomingMessage, res: ServerResponse) {
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
          const data = JSON.parse(requestBody)
          
          const { name, email, message } = data

          // Validar campos requeridos
          if (!name || !email || !message) {
            res.writeHead(400, {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            })
            return res.end(JSON.stringify({ 
              error: 'Todos los campos son requeridos' 
            }))
          }

          // Validar formato de email
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(email)) {
            res.writeHead(400, {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            })
            return res.end(JSON.stringify({ 
              error: 'Email inválido' 
            }))
          }

          // Intentar enviar con Resend si está configurado, sino simular
          const resendApiKey = process.env.RESEND_API_KEY
          
          if (resendApiKey) {
            try {
              // Importar Resend dinámicamente
              const { Resend } = await import('resend')
              const resend = new Resend(resendApiKey)
              const toEmail = process.env.CONTACT_EMAIL || 'randradedev@gmail.com'
              const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

              const { data, error } = await resend.emails.send({
                from: fromEmail,
                to: [toEmail],
                replyTo: email,
                subject: `Nuevo mensaje de contacto de ${name}`,
                html: `
                  <h2>Nuevo mensaje de contacto</h2>
                  <p><strong>Nombre:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Mensaje:</strong></p>
                  <p>${message.replace(/\n/g, '<br>')}</p>
                `,
              })

              if (error) {
                console.error('❌ Error al enviar email (desarrollo):', error)
                res.writeHead(500, {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                })
                return res.end(JSON.stringify({ 
                  error: 'Error al enviar el mensaje',
                  message: error.message || 'Error desconocido'
                }))
              }

              console.log('✅ Email enviado correctamente (desarrollo):', data?.id)
              res.writeHead(200, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              })
              return res.end(JSON.stringify({ 
                success: true,
                message: 'Mensaje enviado correctamente',
                id: data?.id
              }))
            } catch (resendError) {
              console.error('❌ Error con Resend (desarrollo):', resendError)
              // Fallback a simulación si hay error
            }
          }

          // Si no hay API key o hubo error, simular envío
          console.log('📧 Nuevo mensaje de contacto (desarrollo - simulado):', {
            name,
            email,
            message: message.substring(0, 100) + '...',
          })
          console.log('💡 Para enviar emails reales en desarrollo, configura RESEND_API_KEY en .env.local')

          res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          })
          res.end(JSON.stringify({ 
            success: true,
            message: 'Mensaje enviado correctamente (modo desarrollo - simulado)' 
          }))
        } catch (error) {
          console.error('❌ Error procesando contacto:', error)
          res.writeHead(500, { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          })
          res.end(JSON.stringify({ 
            error: 'Error al procesar el mensaje', 
            message: error instanceof Error ? error.message : 'Unknown error' 
          }))
        }
      })
      
      req.on('error', (error) => {
        console.error('❌ Request error:', error)
        res.writeHead(500, { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        })
        res.end(JSON.stringify({ error: 'Request error' }))
      })
    } catch (error) {
      console.error('❌ Middleware error:', error)
      res.writeHead(500, { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
      res.end(JSON.stringify({ error: 'Middleware error' }))
    }
  } else {
    res.writeHead(405, { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
    res.end(JSON.stringify({ error: 'Method not allowed' }))
  }
}

