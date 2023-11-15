import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import './products.css'

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
    <Card className = "root">
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <AddCircleOutlineIcon />
          </IconButton>
        }
        title= {props.title}
        
      />
      <div className= "media">
        
        <img src={props.img_url} alt="img" /> 
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.description}
        </Typography>
      
      {/* <CardActions disableSpacing> */}
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Comparison">
          <EqualizerIcon />
        </IconButton>
      {/* </CardActions> */}
      </CardContent>
    </Card>
  );
}
