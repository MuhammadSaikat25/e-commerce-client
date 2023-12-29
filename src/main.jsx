import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./page/MainLayout/MainLayout";
import Home from "./page/MainLayout/Home";
import AuthProvider from "./Firebase/AuthProvider";
import Product from "./page/Products/Product";
import AllProducts from "./page/Products/AllProducts";
import SingIn from "./page/SingIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {path:'product/:category',element:<Product></Product>},
      {
        path:"products",
        element:<AllProducts></AllProducts>
      }
    ],
  },
  {
    path:"singIn",
    element:<SingIn></SingIn>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
