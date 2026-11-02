# Arc 3D Engineering Portfolio

## Project Setup

This is a 3D engineering portfolio built with modern web technologies.

### Prerequisites

- Node.js (^18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Tailwind CSS dependencies (if needed):
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

3. Initialize Tailwind CSS configuration:
   ```bash
   npx tailwindcss init -p
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run lint` | Run Oxlint to check for issues |
| `npm run preview` | Preview production build |

### Technology Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type-safe development with strict mode
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Helper utilities for React Three Fiber
- **GSAP** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Router** - Navigation and routing

### Project Structure

```
src/
  app/           - Application-level code and configuration
  components/    - Reusable UI components
    common/      - Common shared components
    layout/      - Page layout components
    navigation/  - Navigation components
  sections/      - Page sections (hero, about, journey, etc.)
  features/      - Feature modules (three.js, animations)
  hooks/         - Custom React hooks
  assets/        - Images, models, fonts
    images/      - Image assets
    models/      - 3D model files
    fonts/       - Font files
  data/          - Static data and types
  styles/        - Global styles and Tailwind configuration
  types/         - TypeScript type definitions
  utils/         - Utility functions
public/          - Public assets
  models/        - Public 3D models
  images/        - Public images
  fonts/         - Public fonts
```

### Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration with dark mode
- `postcss.config.js` - PostCSS configuration with Autoprefixer
- `vite.config.ts` - Vite configuration with plugins
- `tsconfig.json` - TypeScript root configuration
- `tsconfig.app.json` - TypeScript application configuration
- `tsconfig.node.json` - TypeScript Node.js configuration
- `.oxlintrc.json` - Oxlint configuration
- `src/router.ts` - React Router configuration

### Dark Mode

The project supports both light and dark modes via Tailwind's `darkMode: ['class']` strategy. The `class` strategy requires adding or removing the `dark` class on the `<html>` element based on user preference or system settings.

### License

MIT
