import "./products.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsFather from "./ProductsMap";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <ProductsFather />
    </>
  );
}
