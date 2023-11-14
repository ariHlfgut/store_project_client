import React from 'react'
import './category.css'

interface CategoryProps  {
    id: string;
    name: string;
    img_url: string;
    count_click: number;
}

export default function Category(props: CategoryProps) {

  return (
    <div  className="category_style">
      <div>{props.name}</div>

      <div>
        <img src={props.img_url} className="img_style_category" />
      </div>
      
        <p>{props.count_click}</p>
    </div>
  )
}