import React from "react";
import Cart from "./Cart";
import "./cartPreview.css";
export default function CartPreview() {
  return (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>
      <Cart />
      <div className="total-price">$349</div>
    </div>
  );
}
