# Configuración de Hashnode para la Página de Recursos

## ¿Cómo funciona?

La página de **Recursos** (`/recursos`) ahora está integrada con tu blog de Hashnode. Los artículos se obtienen automáticamente desde la API de Hashnode y se muestran en tu sitio web con el mismo diseño.

## ¿Dónde residen los documentos?

Los documentos (artículos) residen en tu blog de Hashnode. No necesitas almacenarlos localmente. La página de Recursos los obtiene dinámicamente usando la API GraphQL de Hashnode.

## Configuración

### Paso 1: Obtener tu hostname de Hashnode

Tu hostname es la parte antes de `.hashnode.dev` en la URL de tu blog. Por ejemplo:
- Si tu blog es: `https://roberto-andrade.hashnode.dev`
- Tu hostname es: `roberto-andrade`

### Paso 2: Configurar la variable de entorno

1. Crea un archivo `.env` en la raíz del proyecto (si no existe)
2. Agrega la siguiente línea:

```env
VITE_HASHNODE_HOSTNAME=tu-hostname-aqui
```

**Ejemplo:**
```env
VITE_HASHNODE_HOSTNAME=roberto-andrade
```

### Paso 3: Reiniciar el servidor de desarrollo

Si el servidor está corriendo, deténlo y vuelve a iniciarlo:

```bash
npm run dev
```

## Características Implementadas

✅ **Obtención automática de posts** desde Hashnode  
✅ **Búsqueda en tiempo real** por título y contenido  
✅ **Filtrado por etiquetas** (tags)  
✅ **Post destacado** (el más reciente)  
✅ **Grid de artículos** con imágenes y metadatos  
✅ **Enlaces directos** a los posts en Hashnode  
✅ **Sidebar con posts más leídos** (ordenados por reacciones)  
✅ **Estados de carga y error** manejados correctamente  

## Estructura de Archivos

```
src/
├── types/
│   └── hashnode.ts          # Tipos TypeScript para posts de Hashnode
├── hooks/
│   └── useHashnodePosts.ts   # Hook personalizado para obtener posts
├── pages/
│   └── Blog.tsx              # Componente de la página de Recursos
└── vite-env.d.ts             # Tipos para variables de entorno
```

## Personalización

### Cambiar el número de posts mostrados

Edita `src/hooks/useHashnodePosts.ts`:

```typescript
const { posts, loading, error } = useHashnodePosts({ limit: 20 }) // Cambia 20 por el número deseado
```

### Cambiar el hostname por defecto

Si no configuras la variable de entorno, puedes cambiar el valor por defecto en:
- `src/hooks/useHashnodePosts.ts` (línea 6)
- `src/pages/Blog.tsx` (línea 8)

## Solución de Problemas

### Error: "Error al obtener posts"

1. Verifica que tu hostname de Hashnode sea correcto
2. Asegúrate de que tu blog de Hashnode esté público
3. Verifica la consola del navegador para más detalles

### No se muestran posts

1. Verifica que tengas posts publicados en Hashnode
2. Revisa que la variable de entorno esté configurada correctamente
3. Reinicia el servidor de desarrollo después de cambiar `.env`

## API de Hashnode

Esta integración usa la API pública de Hashnode, que no requiere autenticación. La API está disponible en:
- Endpoint: `https://api.hashnode.com`
- Método: GraphQL
- Documentación: [Hashnode API Docs](https://api.hashnode.com)

## Próximas Mejoras Posibles

- [ ] Paginación de posts
- [ ] Caché de posts para mejor rendimiento
- [ ] Sincronización automática con webhooks
- [ ] Filtros avanzados (fecha, autor, etc.)
- [ ] Vista previa del contenido completo

