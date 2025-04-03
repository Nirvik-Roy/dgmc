import React from 'react'
import img1 from '../assets/592787865_ujjivan.png'
import img2 from '../assets/895261123_aadhar.png'
import img3 from '../assets/164057781_adhikar.jpg'
import img4 from '../assets/718339241_bank-of-baroda.png'
import img5 from '../assets/258996408_aditya-birla.jpg'
import img6 from '../assets/966654309_ESAF.webp'
import img7 from '../assets/924962334_airtel.png'
import img8 from '../assets/814671480_hdfc.png'
import img9 from '../assets/324190884_ARCIL.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Brands = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:1000,
        
      };
  return (
    <>
      <div className='brands_wrapper universal_container'>
        <h1 className='about_head' style={{
            textAlign: 'center'
        }}>Our Most Valuable <span>Partners</span> </h1>

        <div className='brands_divs_wrapper'>
          <Slider {...settings}>
            {[img1,img2,img3,img4,img5,img6,img7,img8,img9].map((e,i)=>{
                return (
                    <div className='brands_div'>
                        <img src={e}/>
                    </div>
                )
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Brands
