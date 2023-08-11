import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo/index.jsx'
import Footer from './components/Footer'
import './styles/main.scss';

const router = createBrowserRouter([{
  path: '/',
  element: <PageOne />
}, {
  path: '/page-two',
  element: <PageTwo />
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
