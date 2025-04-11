import React from "react";
import './Cart.css'
import { useProductDetail } from "../../store";

const Cart = () => {
  const { cart, decrementItem, addToCart, total } = useProductDetail();

  return (
    <div className="cart-container">
    <h1>Your Cart</h1>
    {Object.values(cart).map((item) => (
      <div className="cart-item" key={item?.product?.id}>
        <h3 className="item-title">{item?.product?.title}</h3>
        <p className="item-price">Price: ${item?.product?.price}</p>
        <p className="item-quantity">Quantity: {item.quantity}</p>
        <div className="item-controls">
          <button onClick={() => decrementItem(item.product.id)}>-</button>
          <button onClick={() => addToCart(item.product.id)}>+</button>
        </div>
      </div>
    ))}
    <h3 className="cart-total">Total: ${total}</h3>
  </div>
  
  );
};

export default Cart;
