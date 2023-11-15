import React from "react";

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

export default function Products(props: ProductProps) {
  return (
    <div>
      <h1></h1>
      <div className="product_container">
        <div>{props.name}</div>
        <div>
          <img src={props.img_url} className="img_style" />
        </div>
        <div>{props.title}</div>
        <div>{props.price}</div>
      </div>
    </div>
  );
}
