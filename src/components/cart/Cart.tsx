import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./cart.css";
import { useParams } from "react-router";

interface CartInterFace {
  cart_id: string
  user_id: string
  products: {
    [key: string]: {
      units:number
    }
  }
}

export default function Cart() {
  const [cartData, setCartData] = useState<CartInterFace[]>([])
  const prams = useParams()
  useEffect(() => {
    const fetchAllCartByCartId = async () => {
      try {
        const response = await axios.get(
          `https://api-service-store-projects.onrender.com/api/cart/userid/${prams.user_id}`
        );
        setCartData(response.data);
      } catch (error) {
        console.log("Error fetching cart by id", error);
    }
  };
  fetchAllCartByCartId()
}, [])
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

      <div className="price">$549</div>
    </div>
  );
}
