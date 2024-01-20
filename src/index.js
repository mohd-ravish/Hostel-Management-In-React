import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './Components/App';
import StudentLogin from './Components/student-login';
import AdminLogin from './Components/Admin-Login';
import Rules from './Components/Rules'
import Fee from './Components/Fee'

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/StudentLogin",
    element: <StudentLogin />
  },
  {
    path: "/AdminLogin",
    element: <AdminLogin />
  },
  {
    path: "/Rules",
    element: <Rules />
  },
  {
    path: "/Fee",
    element: <Fee />
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);