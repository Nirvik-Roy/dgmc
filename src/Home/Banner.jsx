import React, { useState } from 'react'
import './Home.css'
import banner from '../assets/photo-1542810634-71277d95dcbb.avif'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import img from '../assets/nathan-dumlao-Xavq7lKj5j8-unsplash.jpg'
import img2 from '../assets/photo-1594708767771-a7502209ff51.avif'
import img3 from '../assets/photo-1488521787991-ed7bbaae773c.avif'
import Slider from "react-slick";
import Cursor from '../Cursor/Cursor';
const Banner = () => {
// const [position,setposition]=useState({
//   x:0,
//   y:0
// })
// const MouseMove = (e) =>{
//   setposition({
//     x:e.clientX,
//     y:e.clientY
//   })
// }
  return (
    <>
    <Cursor />
    <Swiper 
        spaceBetween={30}
        effect={'fade'}
        draggable={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
        
      >

<SwiperSlide >
<div  >
 <div className='banner_wrapper'>
     <img className='banner_img' src={img}/>
     <div className='after'></div>
      <div className='universal_container'>
      <div className='banner_content'>
      <h1>Welcome To 
        <br/> Dream Golden <br/> Memories</h1>
        <h6>Providing Healthcare Access In Underserved Areas, HIV/AIDS Prevention, <br/>
        Maternal And Child Health Pro
        </h6>
        <div className='discover_btn'>
        <p>Donate Now</p>
        <div className='discover_overlay'></div>
        </div>
      </div>
        
      </div>
     </div> 
      </div>
</SwiperSlide>


<SwiperSlide >
<div>
 <div className='banner_wrapper'>
     <img  className='banner_img' src={img2}/>
     <div className='after'></div>
      <div className='universal_container'>
      <div className='banner_content'>
      <h1>Welcome To 
        <br/> Dream Golden <br/> Memories</h1>
        <h6>Providing Healthcare Access In Underserved Areas, HIV/AIDS Prevention, <br/>
        Maternal And Child Health Pro
        </h6>
        <div className='discover_btn'>
        <p>Donate Now</p>
        <div className='discover_overlay'></div>
        </div>
      </div>
        
      </div>
     </div> 
      </div>
</SwiperSlide>



<SwiperSlide >
<div>
 <div className='banner_wrapper'>
     <img   className='banner_img' src={img3}/>
     <div className='after'></div>
      <div className='universal_container'>
      <div className='banner_content'>
      <h1>Welcome To 
        <br/> Dream Golden <br/> Memories</h1>
        <h6>Providing Healthcare Access In Underserved Areas, HIV/AIDS Prevention, <br/>
        Maternal And Child Health Pro
        </h6>
        <div className='discover_btn'>
        <p>Donate Now</p>
        <div className='discover_overlay'></div>
        </div>
      </div>
        
      </div>
     </div> 
      </div>
</SwiperSlide>
      </Swiper>
     
       
     
    </>
     
    
  )
}

export default Banner
