import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, onQuantityChange }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.price.toLocaleString()}원</p>
        <div className="quantity-controls">
          <button className="quantity-button" onClick={() => onQuantityChange(product.id, -1)}>-</button>
          <span>{product.quantity}</span>
          <button className="quantity-button" onClick={() => onQuantityChange(product.id, 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
