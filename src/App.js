import React from "react";
import "./App.css";

import Home from "./features/pages/Home";
import LoginPage from "./features/pages/LoginPage";
import SignupPage from "./features/pages/SignupPage";
import Cheakout from "./features/pages/Checkout";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from "./features/pages/CartPage";
import ProductDetailPage from "./features/pages/ProductDetailPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>)
  },
  
  {
    path: "/login",
    element: (<LoginPage></LoginPage>)
  },
  {
    path: "/signup",
    element: (<SignupPage></SignupPage>)
  },
  {
    path: "/cart",
    element: (<CartPage></CartPage>)
  },
  {
    path: "/cheakout",
    element: (<Cheakout></Cheakout>)
  },
  {
    path: "/product-detail",
    element: (<ProductDetailPage></ProductDetailPage>)
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
