import React from "react";
import "./cart.css";

export default function Cart() {
  return (
    <div className="cartContainer">
      <div className="cartDetails">
        <h2>bird</h2>
        <div className="description">
          <p>gold</p>
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
