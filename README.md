# Exponential Grow AI - Sitio Web

Sitio web profesional para consultoría en IA Generativa, con enfoque en Marketing Digital y Educación. Desarrollado con React, TypeScript, Tailwind CSS y Vite.

Desplegado en **Vercel** con dominio `expgrowai.mx`.

## 🚀 Características

- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **Vite** como bundler
- **React Router** para navegación (SPA con rewrites para Vercel)
- **Material Symbols** para iconos
- **Diseño responsive** y optimizado para móviles
- **Modo oscuro** con paleta indigo / slate oscuro
- **Formulario de contacto** vía API serverless + Resend (dominio `expgrowai.mx` verificado)

## 📋 Requisitos Previos

- Node.js 18+
- npm o yarn

## 🛠️ Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

> Nota: las rutas `/api/*` son funciones serverless de Vercel y no funcionan localmente con `npm run dev`.

## 📁 Estructura del Proyecto

```
expgrowai/
├── api/                     # Funciones serverless (Vercel)
│   ├── contact.ts           # POST → envía email vía Resend
│   └── hashnode.ts          # Proxy para blog Hashnode
├── public/
│   ├── images/
│   ├── _redirects           # Fallback SPA routing
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactModal.tsx
│   │   └── InscripcionModal.tsx
│   ├── pages/
│   │   ├── Home.tsx         # Landing page
│   │   ├── About.tsx
│   │   ├── Services.tsx     # 4 servicios
│   │   ├── Curso.tsx        # Código intacto, ruta oculta
│   │   └── Blog.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vercel.json              # Rewrites para SPA + API
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## 📝 Páginas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Home | Landing page con dos heroes. Secciones: Problemas, Audiencia, Servicios Destacados (incluye "Creación de Agentes de Hermes"), Testimonios |
| `/servicios` | Services | 4 servicios detallados: Marketing → Prompt Engineering → Educación → Auditoría SEO con Agentes de IA. Cada uno con mini casos de éxito |
| `/sobre-mi` | About | Biografía y trayectoria profesional |
| `/recursos` | Blog | Artículos y recursos sobre IA Generativa |
| ~~`/curso`~~ | Curso | Ruta oculta temporalmente (código intacto) |

## 🧩 Servicios

1. **IA Generativa para Marketing** — Brand Brain, automatización de contenido, embudos de venta
2. **Formación en Prompt Engineering** — Workshops, capacitación in-company, metodología probada
3. **IA Generativa para Educación** — Diseño curricular asistido, reducción de carga administrativa
4. **Auditoría SEO con Agentes de IA** — Análisis técnico, on-page, crawlability e informes ejecutivos

## 📬 Formulario de Contacto

El modal de contacto envía un POST a `/api/contact` (serverless function en Vercel) que utiliza **Resend** para entregar el mensaje a `randradedev@gmail.com`.

- From: `Exponential Grow AI <contacto@expgrowai.mx>`
- Reply-To: email del visitante
- Dominio `expgrowai.mx` verificado en Resend

Variables de entorno requeridas en Vercel:

| Variable | Descripción |
|----------|-------------|
| `RESEND_API_KEY` | API key de Resend |
| `CONTACT_EMAIL` | Destinatario (por defecto randradedev@gmail.com) |
| `RESEND_FROM_EMAIL` | Remitente (por defecto contacto@expgrowai.mx) |

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

- **Primary**: Indigo (#6366f1)
- **Background Dark**: Slate oscuro (#0f172a)
- **Surface Dark**: Slate medio (#1e293b)
- **Border Dark**: Slate tenue (#334155)

### Tipografía

- **Manrope** (variable): importada via Google Fonts para titulares y cuerpo

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🚀 Despliegue

Desplegado en Vercel con `framework: null` y rewrites para SPA routing.

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📄 Licencia

© 2026 Exponential Grow AI - Roberto Andrade F. Todos los derechos reservados.