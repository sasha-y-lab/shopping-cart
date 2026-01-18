// hero carousel

import { useState } from 'react'
import './hero.modules.css'

function Hero() {


const [currentIndex, setCurrentIndex] = useState(0);

const images = [
    "/makeup1.jpg",
    "/makeup2.jpg",
    "/makeup3.jpg",
  ];

 const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

const prevSlide = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
};


return (

<>

<div id="heroSection">

  

<img className="imgs"
        src={images[currentIndex]}
        alt="Hero slide"
        style={{ width: "580px", height: "300px", objectFit: "cover"  }}
      />


      

      <div id="nav">

<button className="left-btn" onClick={prevSlide}> 
    <span className="triangle-left"></span>
     </button>


      <button className="right-btn" onClick={nextSlide}> 
        <span className="triangle-right"></span>

         </button>
      

</div>

<div id="imgBg">
    </div>

</div>

</>



);


};


export default Hero