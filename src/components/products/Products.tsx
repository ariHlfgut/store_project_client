import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import ProductsFather from "./ProductsMap";
import React from "react";
import "./products.css";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <ProductsFather />
    </>
  );
}
