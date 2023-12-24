import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/NavigationBar'
import { ROUTES } from './constants/route.constants'
import AboutMePage from './Page/AboutMePage'
import LandingPage from './Page/Landing Page'

import './index.scss'
import BuildtPage from './Page/BuildtPage'
import BlogPage from './Page/BlogPage'

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <LandingPage />
  },
  {
    path: ROUTES.ABOUT_ME,
    element: <AboutMePage />
  },
  {
    path: ROUTES.BUILDT,
    element: <BuildtPage />
  },
  {
    path: ROUTES.BLOG,
    element: <BlogPage />
  }
])

ReactDOM.render(
  <React.StrictMode>
    <div className='star__body'>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,

  document.getElementById('app')
)
