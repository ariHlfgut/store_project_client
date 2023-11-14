
import React from 'react';
import ProductsFather from './ProductsMap';

import "./products.css";

import { useSelector, useDispatch } from "react-redux";


export default function Products() {
    return (
        <>
        <h1>Products</h1>
        <ProductsFather />
        </>
    )
}