import "./products.css";
import React from "react";
import Products from "./ProductsView";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface ProductProps {
  id: string;
  category_id: string;
  name: string;
  title: string;
  description: string;
  price: number;
  img_url: string;
  units_in_stock: number;
  rate: number;
  count_clicks: number;
  color: string;
  model: string;
}

const ProductsFather = () => {
 
  const [categoryProducts, setCategoryProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(`https://b2mfc7l4-8181.euw.devtunnels.ms/api/products`); // You need to create an endpoint that sends to products/category_id
        setCategoryProducts(response.data);
       
      } catch (error) {
        console.log('Error fetching products by category', error);
     
      }
    };
    fetchProductsByCategory();
  }, []);

 
  return (
    <div>
      {categoryProducts.map((product) => (
        <Link key={product.id} className="navLink" to={`/product/${product.id}`}>
          <Products 
            id = {product.id}
            category_id = {product.category_id}
            name = {product.name}
            title = {product.title}
            description = {product.description}
            price = {product.price}
            img_url = {product.img_url}
            units_in_stock = {product.units_in_stock}
            rate = {product.rate}
            count_clicks = {product.count_clicks}
            color = {product.color}
            model = {product.model}/>
         </Link>
      ))}
    </div>
  );
};
export default ProductsFather;
