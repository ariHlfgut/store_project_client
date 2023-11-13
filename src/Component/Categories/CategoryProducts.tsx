import "./category.css"
import React from 'react'

interface ProductProps {
    id: string;
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

const Product: React.FC<ProductProps> = (props: ProductProps) => {
    const handelClick = () => {
        // Here you need to register the router on the page of the extended details of the clicked product
    }

    return (
        <div onClick={handelClick} className='product_container'>
           <div>{props.name}</div>
           <div >
             <img src={props.img_url} className='img_style'/>
           </div>
           <div>{props.title}</div>
           <div>{props.price}</div>
        </div>  
    );
};
export default Product;
