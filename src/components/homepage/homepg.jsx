import { useState } from 'react'
import '../homepage/homepg.modules.css'
import ShopNowButton from '../buttons/buttons'
import Hero from './hero'





function Homepage({setCurrentPage}) {




    

return (
       <>



<div id='heroHead'>

<Hero />

</div>


       

<div id="mainHome">

        <div id="description" className="sideBorder1">
<h3>What is Inaygia?</h3>

<span>

Inaygia is a beauty company. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur magna urna, vel cursus metus dapibus a. Fusce nisl tortor, scelerisque non elit eu, aliquet rutrum nisi. Suspendisse potenti. Aliquam mauris risus, luctus vitae porttitor ut, scelerisque eget nisl. Sed nec vehicula eros. Aenean in aliquam orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus aliquet leo nec aliquet tincidunt. Nulla lacinia auctor mi vel consequat. Pellentesque scelerisque maximus nunc, nec fringilla nulla.

</span>

        </div>

<div id="description" className="sideBorder2">

</div>

<div id="description" className="sideBorder3">


</div>

<div id="buyBtn">

<ShopNowButton setCurrentPage={setCurrentPage} />

</div>

</div>

</>
     
        




    )


};

export default Homepage