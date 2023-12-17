import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
import LandingPage from "./Page/Landing Page";
import { ROUTES } from "./constants/route.constants";
import AboutMePage from "./Page/AboutMePage";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <LandingPage />,
  },
  {
    path: ROUTES.ABOUT_ME,
    element: <AboutMePage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  
  document.getElementById("app")
);
