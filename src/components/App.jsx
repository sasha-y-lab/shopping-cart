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


      <Menu setCurrentPage={setCurrentPage} />

      

      <div className="page-content">
        {currentPage === "home" && <Homepage setCurrentPage={setCurrentPage} />}
        {currentPage === "shop" && (
          <ShopPage
            cart={cart}
            setCart={setCart}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "cart" && <MyCart cart={cart} />}
      </div>


    </>
  )
}

export default App