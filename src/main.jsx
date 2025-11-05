import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './index.css'
import Login from './Login.jsx'
import TelaInicial from './Inicial.jsx'

// configurando o react router para navegação entre as páginas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// --- AQUI ESTÁ A MUDANÇA CRUCIAL: Adicionar 'basename' ---
// O process.env.PUBLIC_URL é o caminho base (ex: /nome-do-repositorio/)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/telainicial",
    element: <TelaInicial />,
  }
], {
  basename: process.env.PUBLIC_URL
})
/* */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)