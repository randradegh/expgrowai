# Exponential Grow AI - Sitio Web

Sitio web profesional para consultoría en IA Generativa, con enfoque en Marketing Digital y Educación. Desarrollado con React, TypeScript, Tailwind CSS y Vite.

## 🚀 Características

- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **Vite** como bundler
- **React Router** para navegación
- **Material Symbols** para iconos
- **Diseño responsive** y optimizado para móviles
- **Modo oscuro** con paleta indigo / slate oscuro
- **Dos heroes**: Marketing Digital primero, Educación después

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

## 📁 Estructura del Proyecto

```
expgrowai/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactModal.tsx
│   │   └── InscripcionModal.tsx
│   ├── pages/               # Páginas principales
│   │   ├── Home.tsx          # Landing page (dos heroes)
│   │   ├── About.tsx
│   │   ├── Services.tsx      # Marketing → Prompt Eng → Educación
│   │   ├── Curso.tsx
│   │   └── Blog.tsx
│   ├── lib/                  # Utilidades
│   │   └── utils.ts
│   ├── App.tsx               # Router principal
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales (Tailwind + Manrope)
├── public/                   # Archivos estáticos
│   └── images/
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

- **Primary**: Indigo (#6366f1)
- **Background Dark**: Slate oscuro (#0f172a)
- **Surface Dark**: Slate medio (#1e293b)
- **Border Dark**: Slate tenue (#334155)

### Tipografía

- **Manrope** (variable): importada via Google Fonts para titulares y cuerpo

## 📝 Páginas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Home | Landing page con dos heroes: Marketing Digital + Educación. Secciones: Problemas, Audiencia, Servicios Destacados, Testimonios |
| `/servicios` | Services | Servicios detallados: Marketing → Prompt Engineering → Educación, cada uno con mini casos de éxito |
| `/curso` | Curso | Información del taller intensivo de Prompt Engineering (4 días / 12 horas) |
| `/sobre-mi` | About | Biografía y trayectoria profesional |
| `/recursos` | Blog | Artículos y recursos sobre IA Generativa |

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🚀 Despliegue

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 📄 Licencia

© 2026 Exponential Grow AI - Roberto Andrade F. Todos los derechos reservados.

## Versión

Junio de 2026.