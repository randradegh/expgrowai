// @ts-ignore - Vercel proporciona los tipos en runtime
import { Resend } from 'resend'

export default async function handler(req: any, res: any) {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Manejar preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, message } = req.body

    // Validar campos requeridos
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Todos los campos son requeridos' 
      })
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Email inválido' 
      })
    }

    // Obtener la dirección de correo de destino desde variables de entorno
    const toEmail = process.env.CONTACT_EMAIL || 'randradedev@gmail.com'
    const resendApiKey = process.env.RESEND_API_KEY
    
    console.log('📧 Configuración de email:', {
      toEmail,
      hasApiKey: !!resendApiKey,
      fromEmail: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    })
    
    // Si no hay API key, retornamos error
    if (!resendApiKey) {
      console.error('❌ RESEND_API_KEY no configurada')
      return res.status(500).json({ 
        error: 'Servicio de email no configurado',
        message: 'Por favor, configura RESEND_API_KEY en las variables de entorno'
      })
    }

    // Inicializar Resend
    const resend = new Resend(resendApiKey)

    // Email desde el cual se envía (puede ser onboarding@resend.dev para pruebas)
    // O usar un dominio verificado: 'Contacto <noreply@tudominio.com>'
    let fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    
    // Validar que no sea un dominio de Gmail (no se puede verificar)
    if (fromEmail.includes('@gmail.com') || fromEmail.includes('@googlemail.com')) {
      console.warn('⚠️ No se puede usar Gmail como email from. Usando onboarding@resend.dev')
      fromEmail = 'onboarding@resend.dev'
    }

    // Función helper para escapar HTML
    const escapeHtml = (text: string): string => {
      const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }
      return text.replace(/[&<>"']/g, (m) => map[m])
    }

    // Escapar datos del usuario para prevenir XSS
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message)

    try {
      // Mejorar el formato del email from con nombre
      const fromEmailWithName = fromEmail.includes('<') 
        ? fromEmail 
        : `Exponential Grow AI <${fromEmail}>`

      // Enviar email usando Resend
      const { data, error } = await resend.emails.send({
        from: fromEmailWithName,
        to: [toEmail],
        replyTo: email, // Para que puedas responder directamente al usuario
        subject: `Nuevo mensaje de contacto de ${safeName}`,
        // Agregar headers para mejor deliverability
        headers: {
          'X-Entity-Ref-ID': `contact-${Date.now()}`,
        },
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #111827; font-size: 24px; font-weight: 700; margin: 0 0 10px 0;">
        Nuevo mensaje de contacto
      </h1>
      <p style="color: #6b7280; font-size: 14px; margin: 0;">
        Has recibido un nuevo mensaje desde tu sitio web
      </p>
    </div>
    
    <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <div style="margin-bottom: 15px;">
        <p style="margin: 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
          Nombre
        </p>
        <p style="margin: 5px 0 0 0; color: #111827; font-size: 16px; font-weight: 500;">
          ${safeName}
        </p>
      </div>
      <div>
        <p style="margin: 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
          Email
        </p>
        <p style="margin: 5px 0 0 0;">
          <a href="mailto:${safeEmail}" style="color: #6366f1; text-decoration: none; font-size: 16px; font-weight: 500;">
            ${safeEmail}
          </a>
        </p>
      </div>
    </div>
    
    <div style="margin-bottom: 30px;">
      <h2 style="color: #374151; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">
        Mensaje
      </h2>
      <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-left: 4px solid #6366f1; border-radius: 4px; padding: 20px;">
        <p style="color: #111827; line-height: 1.7; margin: 0; white-space: pre-wrap; font-size: 15px;">
          ${safeMessage.replace(/\n/g, '<br>')}
        </p>
      </div>
    </div>
    
    <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">
        Este mensaje fue enviado automáticamente desde el formulario de contacto de tu sitio web.<br>
        Puedes responder directamente a este email para contactar a ${safeName}.
      </p>
    </div>
  </div>
</body>
</html>
        `.trim(),
        text: `
NUEVO MENSAJE DE CONTACTO

Has recibido un nuevo mensaje desde tu sitio web.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NOMBRE:
${name}

EMAIL:
${email}

MENSAJE:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este mensaje fue enviado automáticamente desde el formulario de contacto de tu sitio web.
Puedes responder directamente a este email para contactar a ${name}.
        `.trim(),
      })

      if (error) {
        console.error('❌ Error al enviar email con Resend:', JSON.stringify(error, null, 2))
        
        // Mensajes de error más específicos según el tipo de error
        let errorMessage = 'Error al enviar el mensaje'
        if (error.message) {
          errorMessage = error.message
        } else if (typeof error === 'object' && error !== null) {
          // Resend puede devolver errores estructurados
          const resendError = error as any
          if (resendError.message) {
            errorMessage = resendError.message
          }
        }
        
        return res.status(500).json({ 
          error: 'Error al enviar el mensaje',
          message: errorMessage
        })
      }

      console.log('✅ Email enviado correctamente:', data?.id)

      return res.status(200).json({ 
        success: true,
        message: 'Mensaje enviado correctamente',
        id: data?.id
      })
    } catch (emailError) {
      console.error('❌ Error inesperado al enviar email:', emailError)
      const errorMessage = emailError instanceof Error 
        ? emailError.message 
        : typeof emailError === 'object' && emailError !== null
          ? JSON.stringify(emailError)
          : 'Error desconocido al enviar el email'
      
      return res.status(500).json({ 
        error: 'Error al enviar el mensaje',
        message: errorMessage
      })
    }
  } catch (error) {
    console.error('Error al procesar contacto:', error)
    return res.status(500).json({ 
      error: 'Error al enviar el mensaje',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}

