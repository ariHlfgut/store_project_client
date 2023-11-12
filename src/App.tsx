import React from "react";
import Home from "./components/home/Home";
import NavbarComponent from "./components/navbarComponent/NavbarComponent";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Sign_up from "./components/sign_up/Sign_up";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import Categories from "./components/categories/Categories";
import Cart from "./components/cart/Cart";
import "./App.css";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign up" element={<Sign_up />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
export default App;
