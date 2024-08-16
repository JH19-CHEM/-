import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CardList = ({ cards }) => {
  return (
    <div>
      <Typography variant="h5">보유카드</Typography>
      {cards.map((card, index) => (
        <Card key={index}>
          <CardContent>
            <Typography>카드 번호: {card.cardNumber}</Typography>
            <Typography>만료일: {card.expiry}</Typography>
            <Typography>소유자: {card.holderName}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
