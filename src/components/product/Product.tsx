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
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { color, height, width } from "@mui/system";
import { Box } from "@mui/material";
import MapView from "../openLyres/MapView";

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
  const [productDetails, setProductDetails] = useState<ProductProps | null>(
    null
  );
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const prams = useParams();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    setNumberOfProducts(numberOfProducts + 1);
  };

  useEffect(() => {
    const ProductData = async () => {
      try {
        const response = await axios.get(
          `https://api-service-store-projects.onrender.com/api/products/${prams.id}`
        );
        setProductDetails(response.data);
        console.log(response.data[0]._id);
      } catch (error) {
        console.log("error to fetch data", error);
      }
    };
    ProductData();
  }, []);

  return (
    <Box className="flex-container">
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
        <IconButton aria-label="Comparison">
          <EqualizerIcon />
        </IconButton>
      </Card>{" "}
      <MapView />
    </Box>
  );
};
export default Product;
