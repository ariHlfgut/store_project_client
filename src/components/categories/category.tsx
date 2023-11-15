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
    <Card style={{ width: "300px", height: "300px", margin: '20px'}}>
      <CardHeader title = {props.name} />
      <CardMedia image= 'https://studioclass.co.il/wp-content/uploads/2019/06/Screen-Shot-2019-06-12-at-15.18.51.png' style={{ width: "300px", height: "200px" }} />
    </Card>
  )
}
