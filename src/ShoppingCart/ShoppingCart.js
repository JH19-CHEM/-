import React, { useState } from 'react';
import ProductItem from './ProductItem';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: '브랜드A', price: 35000, image: '/image1.png', quantity: 1 },
    { id: 2, name: '브랜드A', price: 25000, image: '/image2.png', quantity: 1 },
    { id: 3, name: '브랜드B', price: 35000, image: '/image3.png', quantity: 1 }
  ]);

  const shippingCost = 3000;

  const handleQuantityChange = (id, delta) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: Math.max(1, product.quantity + delta) } : product
    ));
  };

  const getTotalAmount = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const totalAmount = getTotalAmount();
  const grandTotal = totalAmount + shippingCost;

  return (
    <div className="shopping-cart">
      <div className="header">
        <div className="arrow">←</div>
      </div>
      <h1>장바구니</h1>
      <p>현재 {products.length}개의 상품이 담겨있습니다.</p>
      {products.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
          onQuantityChange={handleQuantityChange} 
        />
      ))}
      <div className="summary">
        <p>
          <span>상품 금액:</span>
          <span>{totalAmount.toLocaleString()}원</span>
        </p>
        <p>
          <span>배송비:</span>
          <span>{shippingCost.toLocaleString()}원</span>
        </p>
        <p>
          <span>총 금액:</span>
          <span>{grandTotal.toLocaleString()}원</span>
        </p>
        <button className="checkout-button">결제하기</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
