import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import './product.css'
import { Box } from '@mui/system';

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

const Product = () => {
    const [productDetails, setProductDetails] = useState< ProductProps | null >(null)
    const { id } = useParams();

    useEffect(() => {
        const ProductData = async () => {
            try {
            const response = await axios.get(`https://b2mfc7l4-8181.euw.devtunnels.ms/api/products/${id}`)
            setProductDetails(response.data)
            }
            catch (error) {
                console.log("error to fetch data", error)
            }
        };
        ProductData()        
    }, [id])

    return (
        <Box  className='product_details_container'>
            <div>{productDetails?.name}</div>
            <div>{productDetails?.img_url}</div>
            <div>{productDetails?.title}</div>
            <div>{productDetails?.price}</div>
            <div>{productDetails?.description}</div>
            <div>{productDetails?.model}</div>
            <div>{productDetails?.color}</div>
            <div>{productDetails?.units_in_stock}</div>
            <div>{productDetails?.rate}</div>
            <IconButton>
                <Badge badgeContent={0} color="secondary"  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                    <ControlPointIcon />
                </Badge>
            </IconButton>
            
        </Box>  
    )
}
export default Product