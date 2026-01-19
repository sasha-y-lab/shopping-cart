import { useState } from 'react'
import Header from './homepage/header'
import './App.css'
import Menu from './homepage/menu.jsx'
import Homepage from './homepage/homepg.jsx'
import ShopPage from './shoppage/shoppg.jsx'



function App() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <>


      <Header />


      <Menu setCurrentPage={setCurrentPage} />

      

      <div className="page-content">
  {currentPage === "home" && <Homepage setCurrentPage={setCurrentPage} />}
  {currentPage === "shop" && <ShopPage setCurrentPage={setCurrentPage} />}
</div>


    </>
  )
}

export default App