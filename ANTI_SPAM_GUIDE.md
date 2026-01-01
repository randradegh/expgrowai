# Guía para Evitar que los Emails Vayan a Spam

## Problema Actual

Los emails están llegando a la carpeta de spam porque estás usando `onboarding@resend.dev`, que es un dominio compartido usado por muchos usuarios y los filtros de spam lo marcan como menos confiable.

## Solución: Verificar tu Dominio en Resend

**Esta es la mejor solución** para mejorar la deliverability (capacidad de entrega) de tus emails.

### Pasos para Verificar tu Dominio

1. **Ve a Resend Domains**
   - Accede a https://resend.com/domains
   - O desde tu dashboard: Domains → Add Domain

2. **Agrega tu Dominio**
   - Ingresa tu dominio (ej: `expgrowai.com` o `tudominio.com`)
   - **No incluyas** `www` ni `http://` - solo el dominio base

3. **Agrega los Registros DNS**
   Resend te mostrará varios registros DNS que debes agregar:
   - **SPF Record** (TXT)
   - **DKIM Records** (TXT) - generalmente 2 registros
   - **DMARC Record** (TXT) - opcional pero recomendado

4. **Configura los DNS en tu Proveedor**
   - Ve al panel de control de tu proveedor de dominio (GoDaddy, Namecheap, Cloudflare, etc.)
   - Agrega los registros DNS exactamente como Resend los muestra
   - **Importante**: Puede tomar hasta 48 horas para que los DNS se propaguen (generalmente es más rápido)

5. **Espera la Verificación**
   - Resend verificará automáticamente los registros
   - Verás un estado "Verified" cuando esté listo

6. **Actualiza la Variable de Entorno**
   - Ve a Vercel Dashboard → Settings → Environment Variables
   - Actualiza `RESEND_FROM_EMAIL` a: `noreply@tudominio.com` (reemplaza con tu dominio)
   - O mejor aún: `Exponential Grow AI <noreply@tudominio.com>`

7. **Redespliega**
   - Ve a Deployments → Redeploy

---

## Mejoras Implementadas en el Código

He mejorado el código del email para que sea menos propenso a spam:

✅ **Email HTML mejorado** con estructura profesional
✅ **Versión de texto plano** incluida (mejor para deliverability)
✅ **Headers personalizados** para tracking
✅ **Formato del email from** con nombre de marca
✅ **Estructura HTML válida** con DOCTYPE y meta tags

---

## Otras Mejoras que Puedes Hacer

### 1. Marcar como "No es Spam" en Gmail

Si recibes un email en spam:
1. Abre el email
2. Haz clic en "No es spam" (o "Report not spam")
3. Esto ayuda a que futuros emails vayan a la bandeja de entrada

### 2. Agregar a Contactos

Agrega el email from (`noreply@tudominio.com`) a tus contactos en Gmail para que siempre llegue a la bandeja de entrada.

### 3. Configurar Filtros en Gmail

Crea un filtro en Gmail:
1. Settings → Filters and Blocked Addresses
2. Create new filter
3. From: `noreply@tudominio.com`
4. Marca "Never send it to Spam"
5. Apply the filter

### 4. Verificar Autenticación

Después de verificar tu dominio, Resend automáticamente configura:
- ✅ **SPF** (Sender Policy Framework)
- ✅ **DKIM** (DomainKeys Identified Mail)
- ✅ **DMARC** (opcional pero recomendado)

Estos protocolos ayudan a que los proveedores de email confíen en tus mensajes.

---

## Comparación: Antes vs Después

### ❌ Antes (onboarding@resend.dev)
- Dominio compartido por miles de usuarios
- Menor reputación
- Mayor probabilidad de ir a spam
- Sin autenticación personalizada

### ✅ Después (noreply@tudominio.com)
- Dominio propio verificado
- Mayor reputación
- Menor probabilidad de ir a spam
- Autenticación SPF/DKIM/DMARC configurada
- Mejor deliverability

---

## Checklist de Verificación

Antes de considerar el problema resuelto:

- [ ] Dominio agregado en Resend
- [ ] Registros DNS agregados en tu proveedor de dominio
- [ ] Dominio verificado en Resend (estado "Verified")
- [ ] Variable `RESEND_FROM_EMAIL` actualizada en Vercel
- [ ] Aplicación redesplegada
- [ ] Email de prueba enviado
- [ ] Email llegó a la bandeja de entrada (no spam)

---

## Si No Tienes un Dominio Propio

Si no tienes un dominio propio, puedes:

1. **Comprar un dominio** (costo: ~$10-15/año)
   - Namecheap, GoDaddy, Google Domains, etc.
   - Luego verifica el dominio en Resend

2. **Usar un subdominio** (si tienes otro dominio)
   - Ej: `contacto.otrodominio.com`
   - Verifica el subdominio en Resend

3. **Aceptar el riesgo de spam** (no recomendado)
   - Los emails seguirán funcionando
   - Pero algunos irán a spam
   - Marca como "No es spam" cuando lleguen

---

## Recursos Adicionales

- [Documentación de Resend sobre Dominios](https://resend.com/docs/dashboard/domains/introduction)
- [Guía de Deliverability de Resend](https://resend.com/docs/dashboard/domains/deliverability)
- [Cómo configurar SPF, DKIM y DMARC](https://resend.com/docs/dashboard/domains/dns-records)

---

## Nota Final

**La verificación de dominio es la mejor solución** para evitar que los emails vayan a spam. El plan gratuito de Resend incluye un dominio verificado, así que no hay costo adicional.

Una vez verificado, tus emails tendrán:
- ✅ Mejor deliverability
- ✅ Mayor confianza de los proveedores de email
- ✅ Menor probabilidad de ir a spam
- ✅ Autenticación completa (SPF/DKIM/DMARC)

