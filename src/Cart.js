import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const Cart = ({ cart }) => {
  return (
    <div>
      <Typography variant="h5">장바구니</Typography>
      {cart.map((item, index) => (
        <Card key={index}>
          <CardContent>
            <Typography>{item.name}</Typography>
            <Typography>{item.price}원</Typography>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained" color="secondary">
        결제하기
      </Button>
    </div>
  );
};

export default Cart;
