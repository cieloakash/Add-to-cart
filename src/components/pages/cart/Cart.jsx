import React from "react";

import { useProductDetail } from "../../store";

const Cart = () => {
  const { cart, decrementItem, addToCart, total } = useProductDetail();

  return (
    <div>
      <h1>Your Cart</h1>
      {Object.values(cart).map((item) => (
        <div key={item?.product?.id}>
            
          <h3>{item?.product?.title}</h3>
          <p>Price: ${item?.product?.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => decrementItem(item.product.id)}>-</button>
          <button onClick={() => addToCart(item.product.id)}>+</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
