# Portfolio — Juan Ignacio Hernández Feser

Portafolio personal de **Juan Ignacio Hernández Feser**, desarrollador FullStack (JavaScript / Python). Sitio bilingüe (ES/EN) con secciones de inicio, sobre mí, skills, proyectos, experiencia y contacto.

## Sitio en vivo

**https://juanhernandezfeser.github.io/MyPortfolio/**

## Tecnologías

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) para animaciones
- [React Router](https://reactrouter.com/)
- [Lucide](https://lucide.dev/) para iconos

## Requisitos

- Node.js y npm instalados ([nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

## Desarrollo local

```sh
# 1. Clonar el repositorio
git clone https://github.com/JuanHernandezFeser/MyPortfolio.git
cd MyPortfolio

# 2. Instalar dependencias
npm i

# 3. Levantar el servidor de desarrollo
npm run dev
```

## Scripts

| Comando            | Descripción                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Servidor de desarrollo (puerto 8080)     |
| `npm run build`    | Build de producción en `dist/`           |
| `npm run lint`     | Ejecuta ESLint                           |
| `npm run test`     | Ejecuta los tests con Vitest             |
| `npm run preview`  | Previsualiza el build localmente         |
| `npm run deploy`   | Build + publica `dist/` en la rama `gh-pages` |

## Deploy en GitHub Pages

El sitio se publica en GitHub Pages desde la rama `gh-pages`, que contiene únicamente el `dist/` compilado:

1. Compilar y publicar:

   ```sh
   npm run deploy
   ```

2. En el repositorio, verificar en **Settings → Pages** que la fuente sea **Deploy from a branch** con la rama **`gh-pages`** en `/ (root)`.

> Nota: por ser un sitio de proyecto, la URL lleva el prefijo `/MyPortfolio/`. La config `base: "/MyPortfolio/"` ya está definida en `vite.config.ts`.

## Estructura principal

```
src/
├── assets/          # Imágenes y recursos
├── components/      # Secciones y componentes de UI
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   └── ...
├── hooks/           # Hooks personalizados (useLang, etc.)
└── App.tsx
```
