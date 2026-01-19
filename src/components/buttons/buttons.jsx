import { useState } from 'react'
import './buttons.modules.css'


function ShopNowButton({ setCurrentPage }) {
  return (
    <button
      className="shopnow"
      onClick={() => setCurrentPage("shop")}
      style={{ cursor: "pointer" }}
    >
      <strong>Shop Now</strong>
    </button>
  );
}

export default ShopNowButton;
