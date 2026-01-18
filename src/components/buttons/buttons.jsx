import { useState } from 'react'
import './buttons.modules.css'


function Buttons() {

const [shopButton, setShopButton] = useState("shop")

    return (

<>


<button
className="shopnow"
onClick={() => setShopButton("shop")}
        style={{ cursor: "pointer" }}

>
    
    <strong>Shop Now</strong>
    
    
    </button>





</>




    )




}

export default Buttons