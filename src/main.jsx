import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./page/MainLayout/MainLayout";
import Home from "./page/MainLayout/Home";
import AuthProvider from "./Firebase/AuthProvider";
import AllProducts from "./page/Products/AllProducts";
import SingIn from "./page/SingIn";
import SingUp from "./page/SingUp";
import CategoryProduct from "./page/Products/CategoryProduct";
import ProductDetails from "./page/Products/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {path:'productCategory/:category',element:<CategoryProduct></CategoryProduct>},
      {
        path:"products",
        element:<AllProducts></AllProducts>
      },
      {
        path:"productDetails/:id",
        element:<ProductDetails></ProductDetails>
      }
    ],
  },
  {
    path:"singIn",
    element:<SingIn></SingIn>
  },
  {
    path:"singUp",
    element:<SingUp></SingUp>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
