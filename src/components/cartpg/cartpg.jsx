import { useState } from 'react'
import '../cartpg/cartpg.modules.css'


function MyCart({ cart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div id="cartmainContainter" style={{ background: "white", minHeight: "100vh" }}>
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cartItem">
              <img src={item.image} alt={item.title} width="80" />
              <div>
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default MyCart;