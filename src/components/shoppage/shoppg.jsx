import { useState, useEffect } from 'react'
import '../shoppage/shoppg.modules.css'



 

function ShopPage({ cart, setCart, setCurrentPage }) {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 12));
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const increaseQty = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const addToCart = (product) => {
    const qty = quantities[product.id] || 1;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: qty }];
    });
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div id="shopmainContainter">
      <h2>Shop Page</h2>
      <button onClick={() => setCurrentPage("cart")}>
        Go to Cart (
  {cart.reduce((sum, item) => sum + item.quantity, 0)}
)

      </button>

      <div id="grid">
        {products.map((product) => (
          <div className="item" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <p>{product.title}</p>
            <p>${product.price}</p>

            <div className="buyInput">
              <button onClick={() => decreaseQty(product.id)}>-</button>
              <input
                type="number"
                value={quantities[product.id] || 1}
                min="1"
                onChange={(e) =>
                  setQuantities((prev) => ({
                    ...prev,
                    [product.id]: Math.max(1, Number(e.target.value)),
                  }))
                }
              />
              <button onClick={() => increaseQty(product.id)}>+</button>
            </div>

            <button onClick={() => addToCart(product)}>+ Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;