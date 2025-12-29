# Configuración de Email para Formulario de Contacto

## Resumen de Costos

### Vercel
- **Plan Hobby (Gratuito)**: 1M invocaciones/mes - **$0/mes**
- ✅ Suficiente para un formulario de contacto personal

### Servicio de Email
Necesitas un servicio externo. Opciones recomendadas:

#### 1. Resend (Recomendado) ⭐
- **Plan Gratuito**: 3,000 emails/mes, 100 emails/día
- **Plan Pro**: $20/mes (50,000 emails/mes)
- **Costo inicial**: **$0/mes**

#### 2. SendGrid
- **Plan Gratuito**: 100 emails/día permanente
- **Costo inicial**: **$0/mes**

#### 3. AWS SES
- **Tier Gratuito**: 62,000 emails/mes (primer año)
- **Después**: ~$0.10 por 1,000 emails
- **Costo inicial**: **$0/mes**

**Total estimado para empezar: $0/mes** 💰

---

## Integración con Resend (Recomendado)

### Paso 1: Crear cuenta en Resend
1. Ve a https://resend.com
2. Crea una cuenta gratuita
3. Obtén tu API Key desde el dashboard

### Paso 2: Instalar Resend en el proyecto

```bash
npm install resend
```

### Paso 3: Configurar variables de entorno

#### En Vercel (Producción):
1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Settings → Environment Variables
3. Agrega las siguientes variables:
   - `RESEND_API_KEY`: Tu API key de Resend (ej: `re_abc123...`)
   - `CONTACT_EMAIL`: `randradedev@gmail.com` (opcional, este es el valor por defecto)
   - `RESEND_FROM_EMAIL`: `onboarding@resend.dev` (opcional, para pruebas. Luego usa tu dominio verificado como `noreply@tudominio.com`)

#### En desarrollo local (opcional):
Crea un archivo `.env.local` en la raíz del proyecto:
```env
RESEND_API_KEY=re_tu_api_key_aqui
CONTACT_EMAIL=randradedev@gmail.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

**⚠️ Importante**: Agrega `.env.local` a tu `.gitignore` para no subir tu API key a Git.

### Paso 4: Verificar que el código esté actualizado

El archivo `api/contact.ts` ya está configurado para usar Resend. Solo necesitas configurar las variables de entorno.

### Paso 5: Verificar dominio (Opcional pero Recomendado)

Para producción, Resend recomienda verificar tu dominio para mejor deliverability. El plan gratuito incluye un dominio verificado.

**Pasos:**
1. Ve a [Domains](https://resend.com/domains) en tu dashboard de Resend
2. Agrega tu dominio (ej: `tudominio.com`)
3. Agrega los registros DNS que Resend te proporciona
4. Una vez verificado, actualiza `RESEND_FROM_EMAIL` en Vercel a `noreply@tudominio.com`

**Nota**: Para pruebas iniciales, puedes usar `onboarding@resend.dev` sin verificar dominio.

---

## Integración con SendGrid

Si prefieres SendGrid:

### Paso 1: Crear cuenta
1. Ve a https://sendgrid.com
2. Crea cuenta gratuita

### Paso 2: Instalar dependencias
```bash
npm install @sendgrid/mail
```

### Paso 3: Variables de entorno
- `SENDGRID_API_KEY`: Tu API key
- `CONTACT_EMAIL`: randradedev@gmail.com

### Paso 4: Código de ejemplo en `api/contact.ts`:
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

const msg = {
  to: process.env.CONTACT_EMAIL || 'randradedev@gmail.com',
  from: 'noreply@tudominio.com', // Debe ser un email verificado
  subject: `Nuevo mensaje de contacto de ${name}`,
  html: `
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `,
}

await sgMail.send(msg)
```

---

## Recomendación Final

Para un sitio personal/portfolio:
- ✅ **Resend** es la mejor opción (más fácil, mejor documentación, suficiente para empezar)
- ✅ **Costo**: $0/mes inicialmente
- ✅ **Escalable**: Puedes actualizar a plan de pago si creces

El código actual en `api/contact.ts` está preparado para integrar cualquier servicio. Solo necesitas descomentar y configurar según el servicio que elijas.

