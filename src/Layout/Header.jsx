import React, { useEffect, useState } from 'react'
import img from '../assets/shape.png'
import logo from '../assets/170872686_dream.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
   useEffect(()=>{
          AOS.init({
              duration: 1000,
              easing: 'ease-in-out',
              once: true,
  offset: 120, 
          })
       },[])
       const [nav,setnav]=useState(false)
  return (
    <>
      <div className='header_wrapper' style={{
        position:'relative'
      }}>
     
            <div className='header_share_wrapper_div'>
            <div className='universal_container header_wrapper5652' style={{
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
            <div data-aos="fade-right" className='nav_logo'>
                  <img src={logo}/>
                </div>
                <div className='nav_links_div'>
                    <p data-aos="fade-down" data-aos-delay={400}>Home</p>
                    <p data-aos="fade-down" data-aos-delay={500}>About Us</p>
                    <p data-aos="fade-down" data-aos-delay={600}>Our Projects</p>
                    <p data-aos="fade-down" data-aos-delay={700}>Gallery</p>
                    <p data-aos="fade-down" data-aos-delay={800}>Join As Volunteer</p>
                    <p data-aos="fade-down" data-aos-delay={900}>Contact Us</p>
                </div>
               <div style={{
                display:"flex",
                justifyContent:'flex-start',
                alignItems:'center',
                columnGap:'20px'
               }}>
               <div className='nav_button_div display' data-aos="fade-left" data-aos-delay={1000}>
                    <p>Donate Us Now</p>
                    <div className='overlay'></div>
                </div>
                <i onClick={(()=>{setnav(!nav)})} data-aos="fade-left" data-aos-delay={1200} style={{
                  fontSize:'25px',
                  color:'white'
                }} class="fa-solid fa-bars-staggered"></i>
               </div>
               
            </div>
                
            </div> 

            <div className={nav ? 'nav_responsive_wrapper_active' :'nav_responsive_wrapper'}>
            <i class="fa-solid fa-xmark" onClick={(()=>{setnav(!nav)})}></i>
            <div className='nav_logo_wrapper8568'>
             <img src={logo}/>
          
            </div>
            <div style={{
              display:'flex',
              
             
              flexDirection:'column',
              rowGap:'30px',
             
            }}>
            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
            <i class="fa-solid fa-house" style={{
            fontSize:'25px'
           }}></i>
            <h1>Home</h1>
            </div>

            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
           <i class="fa-regular fa-address-card" style={{
            fontSize:'25px'
           }}></i>
           <h1>About Us</h1>
            </div>
           

            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
            <i class="fa-solid fa-bars-progress" style={{
            fontSize:'25px'
           }}></i>
               <h1>Our Projects</h1>
            </div>
         
            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
            <i class="fa-solid fa-images" style={{
            fontSize:'25px'
           }}></i>
               <h1>Gallery</h1>
            </div>
           
            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
           <i class="fa-solid fa-handshake-angle" style={{
            fontSize:'25px'
           }}></i>
               <h1>Join As Volunteer</h1>
            </div>

            <div className='d-flex justify-content-start align-items-center' style={{
              color:'white',
              columnGap:'10px'
            }}>
         <i class="fa-solid fa-address-book" style={{
            fontSize:'25px'
           }}></i>
               <h1>Contact Us</h1>
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
