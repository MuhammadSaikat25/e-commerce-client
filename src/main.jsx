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
import Dashboard from "./page/Dashboard/Dashboard";
import AddToCart from "./page/Dashboard/User/AddToCart";
import SellerRequest from "./page/Dashboard/Admin/SellerRequest";
import AddProduct from "./page/Dashboard/Seller/AddProduct";
import UserListing from "./page/Dashboard/User/UserListing";
import MyProducts from "./page/Dashboard/Seller/MyProducts";
import UpdateProduct from "./page/Dashboard/Seller/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "productCategory/:category",
        element: <CategoryProduct></CategoryProduct>,
      },
      {
        path: "products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
  {
    path: "singIn",
    element: <SingIn></SingIn>,
  },
  {
    path: "singUp",
    element: <SingUp></SingUp>,
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "addToCard",
        element: <AddToCart></AddToCart>,
      },
      {
        path: "myListing",
        element: <UserListing></UserListing>,
      },
      {
        path: "SellerRequest",
        element: <SellerRequest></SellerRequest>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "SellerProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
