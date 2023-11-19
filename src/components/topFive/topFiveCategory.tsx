import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../categories/category.css";
import Category from "../categories/category";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface CategoryType {
  _id: string;
  name: string;
  img_url: string;
  count_click: number;
}
export default function TopFiveCategory() {
  const API_BASE_URL = "https://api-service-store-projects.onrender.com/api";
  const [topCategories, setTopCategory] = useState<CategoryType[]>([]);

  useEffect(() => {
    const CategoryData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/categories/topCategory`
        );
        if (Array.isArray(response.data)) {
          setTopCategory(response.data);
        } else {
          console.error("Invalid API response. Expected an array.");
        }
      } catch (error) {
        console.log("error to fetch data", error);
      }
    };
    CategoryData();
  }, []);
  //   return (
  //     <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  //       {topCategories.map((category) => (
  //         <ImageListItem key={category._id}>
  //           <img
  //             srcSet={`${category._id}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
  //             src={`${category.name}?w=164&h=164&fit=crop&auto=format`}
  //             alt={category.img_url}
  //             loading="lazy"
  //           />
  //         </ImageListItem>
  //       ))}
  //     </ImageList>
  //   );
  // }
  return (
    <div>
      <h1 className="Top5">Top 5 Categories</h1>
      <div className="category_container">
        {topCategories.map((category) => (
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
