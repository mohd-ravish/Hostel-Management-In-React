import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import About from './Components/About/About'
import Dashboard from './Components/Dashboard/Dashboard'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/auth",
    element: <Auth />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);