import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import "./cart.css";

export default function Cart() {
  return (
    <div className="cartContainer">
      <div className="cartDetails">
        <p>bird</p>
        <div className="description">
          <ArrowBackIosIcon fontSize="small" />
          gold
        </div>
        <div className="paymentDetails">
          <div className="price">50</div>
          <div className="add">+</div>
          <div className="total">total</div>
          <div className="remove">-</div>
        </div>
      </div>
      <img
        className="cartImage"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dGloKNQMlquVSMCwtLG1NK3MAeV9rSjp2Q&usqp=CAU"
        alt="cart"
      />
    </div>
  );
}
