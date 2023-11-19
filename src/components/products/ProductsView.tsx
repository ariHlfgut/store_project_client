import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedProduct,
  clearSelectedProducts,
} from "../../redux/features/selectedProductsSlice";
import { RootState } from "../../redux/reduxStore";
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
import { useNavigate } from "react-router-dom";

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

const Products: React.FC<ProductProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state: RootState) => state.selectedProducts.selectedProducts
  );
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [isClickedFavorite, setIsClickedFavorite] = useState(false);
  const [isClickedEqualizer, setIsClickedEqualizer] = useState(false);

  const handleAddToCart = (event: React.MouseEvent) => {
    event.preventDefault();
    setNumberOfProducts(numberOfProducts + 1);
  };

  const handleStopFavorite = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsClickedFavorite(!isClickedFavorite);
  };
  const handleSelectProduct = () => {
    dispatch(addSelectedProduct(props.id));

    if (selectedProducts.length === 2) {
      navigate("/productComparison");
    }
  };

  const handleStopEqualizer = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsClickedEqualizer(!isClickedEqualizer);
    handleSelectProduct();
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia image={props.img_url} className="img_card" />
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
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <Badge badgeContent={numberOfProducts} color="secondary">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton
          aria-label="Add to Favorites"
          onClick={handleStopFavorite}
          style={{ color: isClickedFavorite ? "red" : "inherit" }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label="Comparison"
          onClick={handleStopEqualizer}
          style={{ color: isClickedEqualizer ? "blue" : "inherit" }}
        >
          <EqualizerIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Products;
