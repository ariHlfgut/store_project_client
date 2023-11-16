import React from "react";
import Categories from "../categories/Categories";

export default function Home() {
  return (
    <div className="home_container" style={{background: 'rgb(199, 217, 233)'}}>
    
      <h1>home</h1>
      <Categories />
    </div>
  )
}
