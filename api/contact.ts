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
      // Enviar email usando Resend
      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email, // Para que puedas responder directamente al usuario
        subject: `Nuevo mensaje de contacto de ${safeName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
              Nuevo mensaje de contacto
            </h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #374151;">Nombre:</strong> <span style="color: #111827;">${safeName}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${safeEmail}" style="color: #6366f1; text-decoration: none;">${safeEmail}</a></p>
            </div>
            <div style="margin-top: 20px;">
              <h3 style="color: #374151; margin-bottom: 10px;">Mensaje:</h3>
              <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #6366f1; border-radius: 4px;">
                <p style="color: #111827; line-height: 1.6; white-space: pre-wrap;">${safeMessage.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
            </div>
          </div>
        `,
        text: `
Nuevo mensaje de contacto

Nombre: ${name}
Email: ${email}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
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

