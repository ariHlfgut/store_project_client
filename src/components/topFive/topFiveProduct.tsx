import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../categories/category.css";
import Category from "../categories/category";

interface ProductType {
  _id: string;
  name: string;
  img_url: string;
  count_click: number;
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
      <h1>topCategories</h1>
      <div className="category_container">
        {topProducts.map((Product) => (
          <Link
            key={Product._id}
            className="navLink"
            to={`/category/${Product._id}`}
          >
            <Category
              id={Product._id}
              name={Product.name}
              img_url={Product.img_url}
              count_click={Product.count_click}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
