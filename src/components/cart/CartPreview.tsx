import { Button } from "@mui/material";
import React from "react";
import Cart from "./Cart";
import "./cartPreview.css";
export default function CartPreview() {
  return (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>
      <Cart />
      <Cart />
      <div className="total-price">
        <div className="payButton">
          <Button variant="contained">$349</Button>
        </div>
      </div>
    </div>
  );
}
