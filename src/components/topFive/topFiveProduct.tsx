import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../categories/category.css";
import Category from "../categories/category";
import Products from "../products/ProductsView";
interface ProductType {
  _id: string;
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

export default function TopFiveProducts() {
  const API_BASE_URL = "https://api-service-store-projects.onrender.com/api";
  const [topProducts, setTopProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const ProductData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/products/topProducts`
        );
        if (Array.isArray(response.data)) {
          setTopProducts(response.data);
        } else {
          console.error("Invalid API response. Expected an array.");
        }
      } catch (error) {
        console.log("error to fetch data", error);
      }
    };
    ProductData();
  }, []);

  return (
    <div>
      <h1 className="Top5">Top 5 product</h1>

      <div className="category_container">
        {topProducts.map((Product) => (
          <Link
            key={Product._id}
            className="navLink"
            to={`/product/${Product._id}`}
          >
            <Products
              id={Product._id}
              category_id={Product.category_id}
              name={Product.name}
              title={Product.title}
              description={Product.description}
              price={Product.price}
              img_url={Product.img_url}
              units_in_stock={Product.units_in_stock}
              rate={Product.rate}
              count_clicks={Product.count_clicks}
              color={Product.color}
              model={Product.model}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
