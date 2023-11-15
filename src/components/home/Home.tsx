import React from "react";
import Navbar from "../navbarComponent/NavbarComponent";
import Categories from "../categories/Categories";

export default function Home() {
  return (
    <div className="home_container">
      <h1>home</h1>
      <Categories />
    </div>
  )
}
