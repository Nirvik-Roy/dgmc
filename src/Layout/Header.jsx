import React from 'react'
import img from '../assets/shape.png'
import logo from '../assets/170872686_dream.png'
const Header = () => {
  return (
    <>
      <div className='header_wrapper' style={{
        position:'relative'
      }}>
     
            <div className='header_share_wrapper_div'>
            <div className='universal_container' style={{
              display:"flex",
              justifyContent:'space-between',
              alignItems:'center'
            }}>
            <div className='nav_address_div_wrapper'>
                <div style={{
                  display:'flex',
                  justifyContent:'flex-start',
                  alignItems:'center',
                  columnGap:'5px'
                }}>
                <i class="fa-solid fa-location-dot"></i>
                <p>Belya Maharajpur, District - West Medinipur, West Bengal - 721260</p>
                </div>

                <div style={{
                  display:'flex',
                  justifyContent:'flex-start',
                  alignItems:'center',
                  columnGap:'5px'
                }}>
                <i class="fa-solid fa-envelope"></i>
                <p>dreamgoldenmemories@gmail.com </p>
                </div>

                <div style={{
                  display:'flex',
                  justifyContent:'flex-start',
                  alignItems:'center',
                  columnGap:'5px'
                }}>
                <i class="fa-solid fa-phone"></i>
                <p>+91-90022-22268</p>
                </div>
                    
                </div>
                <div className='nav_shre_links_wrapper'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-whatsapp"></i>
                </div>
            </div>
               
            </div>

            <div className='nav_wrapper_links'>
            <div className='universal_container' style={{
              display:"flex",
              justifyContent:'space-between',
              alignItems:'center'
            }}>
            <div className='nav_logo'>
                  <img src={logo}/>
                </div>
                <div className='nav_links_div'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Our Projects</p>
                    <p>Gallery</p>
                    <p>Join As Volunteer</p>
                    <p>Contact Us</p>
                </div>
               
                <div className='nav_button_div'>
                    <p>Donate Us Now</p>
                    <div className='overlay'></div>
                </div>
            </div>
                
            </div> 
      </div>
    </>
  )
}

export default Header
