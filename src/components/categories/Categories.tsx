import React from "react";
import Category from "./category";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./category.css";

interface CategoryType {
  _id: string;
  name: string;
  img_url: string;
  count_click: number;
}
export default function Categories() {
  const API_BASE_URL = "https://api-service-store-projects.onrender.com/api";
  const [categories, setCategory] = useState<CategoryType[]>([]);

  useEffect(() => {
    const ProductData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        if (Array.isArray(response.data)) {
          setCategory(response.data);
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
      <h1>categories</h1>
      <div className="category_container">
        {categories.map((category) => (
          <Link
            key={category._id}
            className="navLink"
            to={`/category/${category._id}`}
          >
            <Category
              id={category._id}
              name={category.name}
              img_url={category.img_url}
              count_click={category.count_click}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
