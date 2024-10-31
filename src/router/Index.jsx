import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import NotFound from "../pages/NotFound";
import MainLayout from "../layout/MainLayout";
import Contacto from "../pages/Contacto";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/contacto",
            element: <Contacto />,
          },
          {
            path: "/blog",
            element: <Blogs />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);
