# Solución de Problemas - Formulario de Contacto

## Error: "Error al enviar el mensaje"

Si estás viendo este error en producción, sigue estos pasos para diagnosticar el problema:

### 1. Verificar Variables de Entorno en Vercel

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Settings → Environment Variables
3. Verifica que estas variables estén configuradas:
   - ✅ `RESEND_API_KEY` - Tu API key de Resend (debe empezar con `re_`)
   - ✅ `CONTACT_EMAIL` (opcional) - Tu email donde recibirás los mensajes
   - ✅ `RESEND_FROM_EMAIL` (opcional) - Email desde el cual se envía

### 2. Verificar la API Key de Resend

1. Ve a https://resend.com/api-keys
2. Verifica que tu API key esté activa
3. Copia la API key completa (debe empezar con `re_`)
4. En Vercel, asegúrate de que:
   - El nombre de la variable sea exactamente: `RESEND_API_KEY`
   - El valor sea la API key completa
   - Esté marcada para **Production** (y Preview si quieres)

### 3. Verificar el Email "From"

**Para pruebas iniciales:**
- Usa `onboarding@resend.dev` (no requiere verificación)

**Para producción:**
- Debes verificar tu dominio en Resend
- Usa un email como `noreply@tudominio.com`

**Pasos para verificar dominio:**
1. Ve a https://resend.com/domains
2. Agrega tu dominio
3. Agrega los registros DNS que Resend te proporciona
4. Espera a que se verifique (puede tomar unos minutos)
5. Actualiza `RESEND_FROM_EMAIL` en Vercel

### 4. Verificar Logs en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Deployments → Selecciona el último deployment
3. Functions → `/api/contact`
4. Revisa los logs para ver el error específico

Los logs mostrarán errores como:
- ❌ `RESEND_API_KEY no configurada` → Falta la variable de entorno
- ❌ `Invalid API key` → La API key es incorrecta
- ❌ `Domain not verified` → El dominio/email from no está verificado

### 5. Problemas Comunes

#### Error: "Servicio de email no configurado"
**Causa**: Falta `RESEND_API_KEY` en Vercel
**Solución**: Agrega la variable de entorno `RESEND_API_KEY` con tu API key

#### Error: "Invalid API key" o "Unauthorized"
**Causa**: La API key es incorrecta o fue revocada
**Solución**: 
1. Genera una nueva API key en Resend
2. Actualiza `RESEND_API_KEY` en Vercel
3. Redespliega la aplicación

#### Error: "Domain not verified" o "From address not verified"
**Causa**: Estás usando un email from que no está verificado
**Solución**: 
1. Usa `onboarding@resend.dev` para pruebas
2. O verifica tu dominio en Resend y usa un email verificado

#### Error: "Rate limit exceeded"
**Causa**: Has excedido el límite del plan gratuito (100 emails/día)
**Solución**: Espera hasta el siguiente día o actualiza a un plan de pago

### 6. Redesplegar después de cambios

**Importante**: Después de agregar o modificar variables de entorno:
1. Ve a Deployments en Vercel
2. Haz clic en los tres puntos (⋯) del último deployment
3. Selecciona "Redeploy"
4. O simplemente haz un nuevo commit y push

### 7. Probar localmente (opcional)

1. Crea un archivo `.env.local` en la raíz del proyecto:
```env
RESEND_API_KEY=re_tu_api_key_aqui
CONTACT_EMAIL=randradedev@gmail.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Prueba el formulario de contacto
4. Revisa la consola del servidor para ver los logs

### 8. Contactar Soporte

Si después de seguir estos pasos el problema persiste:
1. Revisa los logs en Vercel para el error específico
2. Verifica el estado de tu cuenta en Resend
3. Revisa la documentación de Resend: https://resend.com/docs

## Checklist de Verificación

Antes de reportar un problema, verifica:

- [ ] `RESEND_API_KEY` está configurada en Vercel
- [ ] La API key es correcta y está activa
- [ ] `RESEND_FROM_EMAIL` está configurada (o usa el default `onboarding@resend.dev`)
- [ ] Has redesplegado después de agregar variables de entorno
- [ ] Has revisado los logs en Vercel para el error específico
- [ ] Tu cuenta de Resend tiene créditos disponibles (plan gratuito: 100 emails/día)


