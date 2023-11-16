import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { useState } from "react";
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
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [isClickedFavorite, setIsClickedFavorite] = useState(false);
  const [isClickedEqualizer, setIsClickedEqualizer] = useState(false);

  const handleAddToCart = (event) => {
      event.preventDefault();
      setNumberOfProducts(numberOfProducts + 1);
    };

    const handleStopFavorite = (event) => {
      event.preventDefault();
      setIsClickedFavorite(true);
    }

    const handleStopEqualizer = (event) => {
      event.preventDefault();
      setIsClickedEqualizer(!isClickedEqualizer);
    }
   
   

  return (
    <Card className='product_card'>
      <CardActionArea>
      <CardMedia image= {props.img_url}  className='img_card' />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart} >
          <Badge badgeContent={numberOfProducts} color="secondary">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="Add to Favorites" 
         onClick={handleStopFavorite}
         style={{ color: isClickedFavorite ? 'red' : 'inherit' }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Comparison"
          onClick={handleStopEqualizer}
          style={{ color: isClickedEqualizer ? 'blue' : 'inherit' }}>
          <EqualizerIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
