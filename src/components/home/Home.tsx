import React from "react";
import Categories from "../categories/Categories";
import { Box } from "@mui/material";
import TopFiveCategory from "../topFive/topFiveCategory";
import TopFiveProducts from "../topFive/topFiveProduct";

export default function Home() {
  return (
    <>
      <Box>
        <h1>home</h1>
        <Categories />
        <TopFiveCategory />
        <TopFiveProducts />
      </Box>
    </>
  );
}
