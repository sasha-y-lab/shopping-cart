import { useState, useEffect } from 'react'
import Header from './homepage/header'
import './App.css'
import Menu from './homepage/menu.jsx'
import Homepage from './homepage/homepg.jsx'
import ShopPage from './shoppage/shoppg.jsx'
import MyCart from './cartpg/cartpg.jsx'




function App() {

  const [cart, setCart] = useState([]);

  const [currentPage, setCurrentPage] = useState("home");

   const [scrolled, setScrolled] = useState(false);


   const updateQuantity = (id, qty) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, qty) }
        : item
    )
  );
};

const removeItem = (id) => {
  setCart(prev => prev.filter(item => item.id !== id));
};



   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // change 50 to the scroll point you want
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  

  return (
    <>


      <Header className={`titleHome ${scrolled ? 'scrolled' : ''}`} />


      <Menu cart={cart} setCurrentPage={setCurrentPage} />

      

      <div className="page-content">
        {currentPage === "home" && <Homepage setCurrentPage={setCurrentPage} />}
        {currentPage === "shop" && (
          <ShopPage
            cart={cart}
            setCart={setCart}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "cart" && <MyCart cart={cart}
  updateQuantity={updateQuantity}
  removeItem={removeItem} />}
      </div>


    </>
  )
}

export default App