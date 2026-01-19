import { useState } from 'react'
import '../cartpg/cartpg.modules.css'


function MyCart({ cart, updateQuantity, removeItem }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div id="cartmainContainer" style={{ background: "white", minHeight: "100vh" }}>
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div id="cartSection">
            {cart.map(item => (
              <div key={item.id} className="cartItem">
                <img src={item.image} alt={item.title} width="80" />

                <div className="cartDetails">
                  <p>{item.title}</p>

                  {/* Quantity Controls */}
                  <div className="qtyControls">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>

                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    />

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                {/* Remove Button */}
                <button
                  className="removeBtn"
                  onClick={() => removeItem(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <h3>Total: ${total.toFixed(2)}</h3>

          <button type="button" className="checkoutBtn">
            <h4>Check Out</h4>
          </button>
        </>
      )}
    </div>
  );
}

export default MyCart;