import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import "./cart.css";
export default function Cart() {
  return (
    <div className="item">
      <div className="buttons">
        <span className="delete-btn"></span>
        <span className="like-btn"></span>
      </div>

      <div className="image">
        <img
          className="cart-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dGloKNQMlquVSMCwtLG1NK3MAeV9rSjp2Q&usqp=CAU"
          alt=""
        />
      </div>

      <div className="description">
        <span>Common Projects</span>
        <span>Bball High</span>
        <span>White</span>
      </div>

      <div className="quantity">
        <button className="plus-btn" type="button" name="button">
          <AddIcon fontSize="small" />
        </button>
        <input type="text" name="name" value={"1"} />
        <button className="minus-btn" type="button" name="button">
          <RemoveIcon fontSize="small" />
        </button>
      </div>

      <div className="total-price">$549</div>
    </div>
  );
}
