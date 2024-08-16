import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const products = [
  { id: 1, name: '브랜드A', price: 35000, image: '/images/shoe1.png' },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      {products.map((product) => (
        <Card key={product.id}>
          <img src={product.image} alt={product.name} />
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="h6">{product.price}원</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
              담기
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
