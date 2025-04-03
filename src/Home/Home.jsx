import React from 'react'
import Banner from './Banner'
import './Home.css'
import HomeAbout from './HomeAbout'
import HomeProjects from './HomeProjects'
import Testimonial from './Testimonial'
import Imagegallery from './ImageGAllery'
import Achivements from './Achivements'
import Brands from './Brands'
const Home = () => {
  return (
    <>
      <Banner/>
      <HomeAbout/>
      <Achivements/>
      <HomeProjects/>
      <Testimonial/>
      <Imagegallery/>
      <Brands/>
    </>
  )
}

export default Home
