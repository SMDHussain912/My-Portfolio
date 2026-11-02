import { createBrowserRouter } from 'react-router-dom'

// Base routes - will be expanded with portfolio sections later
export const router = createBrowserRouter([
  {
    path: '/',
    element: null, // Placeholder - will be replaced by portfolio sections
  },
  {
    path: '*',
    element: null, // 404 placeholder
  },
])