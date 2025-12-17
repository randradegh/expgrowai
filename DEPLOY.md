# Instrucciones para Desplegar en Vercel

## Prerrequisitos

1. Tener una cuenta en [Vercel](https://vercel.com)
2. Tener instalado el CLI de Vercel globalmente

## Instalación del CLI de Vercel

Si no lo tienes instalado, ejecuta:

```bash
npm install -g vercel
```

## Pasos para Desplegar

### Opción 1: Desde la Terminal (Recomendado)

1. **Inicia sesión en Vercel:**
   ```bash
   vercel login
   ```

2. **Despliega el proyecto:**
   ```bash
   vercel
   ```
   
   Te hará algunas preguntas:
   - ¿Set up and deploy? → **Y** (Sí)
   - ¿Which scope? → Selecciona tu cuenta
   - ¿Link to existing project? → **N** (No, si es la primera vez)
   - ¿What's your project's name? → Presiona Enter para usar el nombre por defecto o escribe uno personalizado
   - ¿In which directory is your code located? → Presiona Enter (usa `./`)
   - ¿Want to override the settings? → **N** (No)

3. **Para producción:**
   ```bash
   vercel --prod
   ```

### Opción 2: Desde el Dashboard de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Add New Project"
3. Conecta tu repositorio de Git (GitHub, GitLab, Bitbucket)
4. Vercel detectará automáticamente que es un proyecto Vite
5. Haz clic en "Deploy"

## Configuración de Variables de Entorno

Después del primer despliegue, configura la variable de entorno:

1. Ve a tu proyecto en el dashboard de Vercel
2. Ve a **Settings** → **Environment Variables**
3. Agrega:
   - **Name:** `VITE_HASHNODE_HOSTNAME`
   - **Value:** `randradedev`
   - **Environment:** Production, Preview, Development (marca todas)

4. Vuelve a desplegar para que los cambios surtan efecto

## Verificar el Despliegue

Después de desplegar, deberías poder:
- Ver tu sitio en la URL que Vercel te proporciona
- Ver tus posts de Hashnode en la página de Recursos
- La función serverless `/api/hashnode` debería estar funcionando

## Comandos Útiles

```bash
# Ver información del proyecto
vercel ls

# Ver logs en tiempo real
vercel logs

# Abrir el dashboard en el navegador
vercel dashboard

# Eliminar un despliegue
vercel remove
```

## Solución de Problemas

### La función serverless no funciona
- Verifica que el archivo `api/hashnode.ts` esté en la raíz del proyecto
- Revisa los logs en el dashboard de Vercel: **Deployments** → Selecciona un deployment → **Functions**

### Los posts no se cargan
- Verifica que la variable de entorno `VITE_HASHNODE_HOSTNAME` esté configurada
- Revisa la consola del navegador para ver errores
- Verifica que tu blog de Hashnode tenga posts publicados

### Error de CORS
- La función serverless debería manejar CORS automáticamente
- Si persiste, verifica que la función esté desplegada correctamente

## Notas Importantes

- La función serverless (`api/hashnode.ts`) se ejecuta en el servidor de Vercel, evitando problemas de CORS
- El proxy de desarrollo (`vite.config.ts`) solo funciona localmente
- En producción, todas las peticiones van a `/api/hashnode` que es manejada por la función serverless

