import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './category.css'

interface CategoryProps  {
    id: string;
    name: string;
    img_url: string;
    count_click: number;
}

export default function Category(props: CategoryProps) {

  return (
    <Card className = "root">
      <CardHeader title = {props.name} />
      <div className= "media">
        <img src = {props.img_url} alt='img'/>
      </div> 
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.count_click}
        </Typography>
        </CardContent>
    </Card>
  )
}
