import React from "react";
import Categories from "../categories/Categories";
import { Box } from "@mui/material";
import TopFiveCategory from "../topFive/topFiveCategory";
import TopFiveProducts from "../topFive/topFiveProduct";

export default function Home() {
  return (
    <Box
      className="home_container"
      style={{ background: "rgb(199, 217, 233)" }}
    >
      <Categories />
      <TopFiveCategory />
      <TopFiveProducts />
    </Box>
  );
}
