import { createElement } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export const router = createBrowserRouter([{
  path: '/',
  element: createElement(App),
  children: [
    { index: true, element: createElement(HomePage) },
    { path: '*', element: createElement(NotFoundPage) },
  ],
}])
