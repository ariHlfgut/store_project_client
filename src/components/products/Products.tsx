import { useSelector, useDispatch } from "react-redux";
import ProductsFather from "./ProductsMap";
import React from "react";

export default function Products() {
  return (
    <div className="pageContainer">
      <ProductsFather />
    </div>
  );
}
