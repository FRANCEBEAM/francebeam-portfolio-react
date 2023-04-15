import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import './index.scss'
import Navbar from './components/Navbar'
import Home from './pages/Home'


const AppyLayout = () =>{
    return(
      <>
        <Navbar />
        <Outlet />
      </>
    )
}


const router = createBrowserRouter([
  {
    element: <AppyLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);