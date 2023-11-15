import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import './product.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
    const parms = useParams();

    useEffect(() => {
        const ProductData = async () => {
            try {
            const response = await axios.get(`https://api-service-store-projects.onrender.com/api/products/${parms.id}`)
            setProductDetails(response.data)
            }
            catch (error) {
                console.log("error to fetch data", error)
            }
        };
        ProductData()        
    }, [])

    return (
        <Card className='product_details_container'>
            <div>{parms.id}</div>
            <CardHeader 
                action={
                    <IconButton aria-label="settings">
                      <AddShoppingCartIcon  />
                    </IconButton>
                  }
                  title = {`${productDetails?.name} , ${productDetails?.title}`}
            />
            <CardMedia
                className= "media"
                image= {productDetails?.img_url}
                title="img product"
                />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {productDetails?.description}
                </Typography>
                
                <Typography variant="body2" color="textSecondary" component="p">
                {productDetails?.price}$
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                color: {productDetails?.description}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                {productDetails?.model}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                {productDetails?.rate}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                {productDetails?.units_in_stock}
                </Typography>
            </CardContent>

            <IconButton>
                <Badge badgeContent={0} color="secondary"  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                    <ControlPointIcon />
                </Badge>
            </IconButton>
        </Card>  
    )
}
export default Product