import React from "react";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Sign_up from "./components/sign_up/Sign_up";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import CartPreview from "./components/cart/CartPreview";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Header from "./components/header/Header";
import ProductComparison from "./components/productComparison/ProductComparison";
import MapView from "./components/openLyres/MapView";
function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign_up />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:id" element={<Products />} />
        <Route path="/cartPreview" element={<CartPreview />} />
        <Route path="/ProductComparison" element={<ProductComparison />} />
        <Route path="/storeLocation" element={<MapView />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
