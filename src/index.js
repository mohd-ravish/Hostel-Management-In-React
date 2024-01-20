import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './Components/App';
import StudentLogin from './Components/student-login';
import AdminLogin from './Components/Admin-Login';

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
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);