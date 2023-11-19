import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import "./product.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MapView from "../openLyres/MapView";
import Rating from "@mui/material/Rating";
import getToken from "../../utiles/getToken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface ProductProps {
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

export interface ProductInCartInterface {
  product_id: string
  units: number;
}

export interface AddToCartInterface {
  user_id: string
  products: ProductInCartInterface;
}

function convertToRating(purchases: number): number {
  const scalingFactor: number = 150;
  const normalizedValue: number = Math.min(1, purchases / scalingFactor);
  const rating: number = Math.ceil(normalizedValue * 5);
  return rating;
}
const Product = () => {

  const [productDetails, setProductDetails] = useState<ProductProps | null>(null);
  const [value, setValue] = React.useState<number | null>(2);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const prams = useParams()
  const userId = localStorage.getItem('userId');
  console.log(userId)

  useEffect(() => {
    const ProductData = async () => {
      try {
        const response = await axios.get(
          `https://api-service-store-projects.onrender.com/api/products/${prams.id}`,
          { headers: { authorization: getToken() } }
        );
        setProductDetails(response.data);
        setValue(convertToRating(response.data.units_in_stock));
      } catch (error) {
        console.log("error to fetch data", error);
      }
    };
    ProductData();
  }, [prams.id]);

  const handleAddToCart = async() => {
    setNumberOfProducts((prevCount) => prevCount + 1);
        try {
          const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://api-service-store-projects.onrender.com/api/carts/addToCart`,
            headers: { 
              'Content-Type': 'application/json',
              'authorization': getToken()
            },
            data : {
              "user_id" : userId,
              "products" : {
                "product_id": prams.id,
                "units": numberOfProducts 
    
              }
            }
          };
          console.log(config.data)
            const response = await axios.request(config)
            console.log(response);
          if (response.status === 200) {
              toast('The product has been successfully added to the cart')
          }
          else {
            toast('Error! We were unable to add a product to the cart')
          }
        }
         catch (error) {
          console.log("error to fetch data", error);
        }
        
      };
      
  return (
    <div className="product_container">
      <Card className="cards_container">
        <CardHeader
          title={`${productDetails?.name} , ${productDetails?.title}`}
        />
        <div className="card-content-container">
          <div className="img_div">
            <CardMedia image={productDetails?.img_url} className="img_style" />
          </div>
          <CardContent className="description_container">
            <Typography variant="body2" color="textSecondary" component="p">
              PRICE: {productDetails?.price}$
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              description: {productDetails?.description}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              color: {productDetails?.color}
              <div
                style={{
                  backgroundColor: productDetails?.color,
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              ></div>
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              model: {productDetails?.model}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              rate: {productDetails?.rate}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              units_in_stock: {productDetails?.units_in_stock}
            </Typography>
          </CardContent>
        </div>
        <IconButton aria-label="settings" onClick={handleAddToCart}>
          <Badge
            badgeContent={numberOfProducts}
            color="secondary"
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <br />
        <Rating name="simple-controlled" value={value} />
      </Card>
      <ToastContainer />
      <MapView />
    </div>
  );
};
export default Product;
