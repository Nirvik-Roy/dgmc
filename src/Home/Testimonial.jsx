import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

const Testimonial = () => {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: '70px',
        dots: false,
        infinite: true,
        slidesToShow: 3,
        speed: 500
      };
    return (
        <>
            <div className='universal_container'>
                <div className='testimonial_wrapper'>
                    <div style={{

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        columnGap: '10px',
                        
                    }}>
                        <i class="fa-solid fa-heart" style={{
                            color: 'rgb(66, 159, 64)'
                        }}></i>
                        <p className='heading_para ' style={{
                            color: 'rgb(66, 159, 64)',
                            textTransform: 'capitalize',
                            textAlign: 'center',
                            lineHeight: '30px',
                        }}>
                            At Dream Golden Memories, we value transparency, accountability, <br/> and ethical practices.
                        </p>
                    </div>
                    <h1 className='about_head' style={{
                        textAlign:"center",
                        marginTop:"20px"
                    }}>Feedback From <br/>
                    <span>Help Received</span>  Peoples</h1>

                    <div className='testimonial_cards_wrapper'>
                    <Slider {...settings}>
                    {[1,2,3,4,5,6,7,8,9,10].map((e,i)=>{
                        return (
                            <>
                            <div className='testimonial_card1'>
                                <div className='client_img'>
                                    <img src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'}/>
                                </div>
                                <p className='client_name'>Asis Paul</p>
                                <p className='client_occuptaion'>Banker</p>

                                <p className='client_review'>
                                <q>Dream Golden Memories transformed our community with their unwavering support and compassion. Truly life-changing!.</q>
                                </p>
<div className='rating_div_wrapper'>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
<i class="fa-regular fa-star"></i>
</div>
                        </div>  
                            </>
                        )
                    })}
                    </Slider>
                
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
