# Exponential Grow AI - Sitio Web

Sitio web profesional para consultoría en IA Generativa, desarrollado con React, TypeScript, Tailwind CSS y Vite.

## 🚀 Características

- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **Vite** como bundler
- **React Router** para navegación
- **Material Symbols** para iconos
- **Diseño responsive** y optimizado para móviles
- **Modo oscuro** con paleta de colores indigo

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
│   ├── components/      # Componentes reutilizables
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/          # Páginas principales
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── Blog.tsx
│   ├── lib/            # Utilidades
│   │   └── utils.ts
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── public/             # Archivos estáticos
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

- **Primary**: Indigo (#6366f1) - Color principal para modo oscuro
- **Background Dark**: Slate oscuro (#0f172a)
- **Surface Dark**: Slate medio (#1e293b)

### Autor

El nombre del autor está configurado como **Roberto Andrade F.** y aparece en:
- Footer
- Página de Blog (sidebar)

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

© 2024 Exponential Grow AI - Roberto Andrade F. Todos los derechos reservados.

