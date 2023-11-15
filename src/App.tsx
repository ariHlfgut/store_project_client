import React from "react";
import Home from "./components/home/Home";
import NavbarComponent from "./components/navbarComponent/NavbarComponent";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Sign_up from "./components/sign_up/Sign_up";
import Products from "./components/products/products";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import "./App.css";


function App() {
  return (
    <div className="appContainer">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign up" element={<Sign_up />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/category/:category_id" element= {<Products />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
