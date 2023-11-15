import React from "react";
import "./category.css";

interface CategoryProps {
  id: string;
  name: string;
  img_url: string;
  count_click: number;
}

export default function Category(props: CategoryProps) {
  return (
    <div className="category_card">
      <h2>{props.name}</h2>
      <img
        src={props.img_url}
        className="img_card_category"
        alt="Circular Image"
      />
    </div>
  );
}
