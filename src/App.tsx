import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/NavigationBar'
import { ROUTES } from './constants/route.constants'
import AboutMePage from './Page/AboutMePage'
import LandingPage from './Page/LandingPage'

import './index.scss'
import BuildtPage from './Page/BuildtPage'
import BlogPage from './Page/BlogPage'
import ReadsPage from './Page/ReadsPage'

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
  },
  {
    path: ROUTES.READ,
    element: <ReadsPage/>
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
