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

const ProductDetails: React.FC<ProductProps> = (props: ProductProps) => {
    return (
        <div  className='product_details_container'>
            <div>{props.name}</div>
            <div>{props.img_url}</div>
            <div>{props.title}</div>
            <div>{props.price}</div>
            <div>{props.description}</div>
            <div>{props.model}</div>
            <div>{props.color}</div>
            <div>{props.units_in_stock}</div>
            <div>{props.rate}</div>
            <button>add to cart</button>
        </div>  
    )
}
export default ProductDetails