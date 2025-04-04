import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import img1 from '../assets/296745101_7962037506_1720b96cba_z.jpg'
import img2 from '../assets/358490769_unemployment.jpg'
import img3 from '../assets/nathan-dumlao-Xavq7lKj5j8-unsplash.jpg'
import img4 from '../assets/photo-1594708767771-a7502209ff51.avif'
import img5 from '../assets/553714517_2151494251.jpg'
import img6 from '../assets/photo-1567001766755-3a3775614445.avif'
const Imagegallery = () => {
  return (
    <>
      <div style={{
        paddingTop:'50px'
      }}>
      <p className='heading_para' style={{
        textAlign:'center',
      }}>Start donating for poor people
</p>
      <h1 className='about_head' style={{
        textAlign:'center'
      }}>Image <span>Gallery</span></h1>
        <div className='image_gallery_Wrapper'>
        <Swiper
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={'auto'}
          autoplay={
            {
              delay: 2000,
              disableOnInteraction: false,
            }
          }
          speed={1000}
        coverflowEffect={{
          rotate: 30,
          stretch: 30,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
          <h3>Image 1</h3>
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <h3>Image 2</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <h3>Image 3</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <h3>Image 4</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
          <h3>Image 5</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
          <h3>Image 6</h3>
        </SwiperSlide>
      
      </Swiper>
        </div>
      </div>
    </>
  )
}

export default Imagegallery
