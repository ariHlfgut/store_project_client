import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./cart.css";
import { useSelector } from 'react-redux'
import { RootState } from "../../redux/reduxStore";
import { ProductProps } from "../product/Product";
import { AddToCartInterface } from "../product/Product";

export default function Cart() {
  const [cartData, setCartData] = useState<AddToCartInterface[]>([])
  const [cartProduct, setCartProduct] = useState<ProductProps[]>([])

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchAllCartByCartId = async () => {
      try {
        const response = await axios.get(
          `https://api-service-store-projects.onrender.com/api/carts/userId/${userId}`
        );
        console.log(userId)
        setCartData(response.data);
      } catch (error) {
        console.log("Error fetching cart by id", error);
    }
  };
  
  fetchAllCartByCartId()
}, [userId])
   
cartData.map((cart) => (
    useEffect(() => {
  const fetchProductByCartId = async () => {
    try {
      const response = await axios.get(
        `https://api-service-store-projects.onrender.com/api/products/${cart.products.product_id}`
      );
      console.log(cart.products.product_id)
      setCartProduct(response.data);
    } catch (error) {
      console.log("Error fetching cart by id", error);
  }
};

fetchProductByCartId()
}, [])

))
  return (
    <div className="cartContainer">
      {cartProduct.map((oneCart) => (
        <div className="item">
          <div className="buttons">
            <span className="delete-btn"></span>
            <span className="like-btn"></span>
          </div>

          <div className="image">
            <img
              className="cart-image"
              src= {oneCart.img_url}
              alt= {oneCart.name}
            />
          </div>

          <div className="description">
            <span>{oneCart.title}</span>
            <span>{oneCart.description}</span>
            <span>{oneCart.color}</span>
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

          <div className="price">${oneCart.price}</div>
        </div>
      ))}
    </div>
  );
}
