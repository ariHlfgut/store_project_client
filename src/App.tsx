import React from "react";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Sign_up from "./components/sign_up/Sign_up";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign up" element={<Sign_up />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
