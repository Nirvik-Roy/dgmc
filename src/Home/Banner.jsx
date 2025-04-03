import React from 'react'
import './Home.css'
import banner from '../assets/photo-1542810634-71277d95dcbb.avif'
const Banner = () => {
  return (
    <>
     <div className='banner_wrapper'>
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
    </>
  )
}

export default Banner
