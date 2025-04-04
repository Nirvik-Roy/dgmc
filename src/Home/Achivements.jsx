import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
const Achivements = () => {
    const [counter,setcounter]=useState(false)
      useEffect(()=>{
              AOS.init({
                  duration: 500,
                  easing: 'ease-in-out',
                  once: true,
      offset: 120, 
              })
           },[])
    return (
    
        <>
            <div className='achivements_wrapper'>
                <div className='universal_container achivements_wrapper'>
                    <div className='achivement_div1' data-aos='fade-up'>
                        <h1><CountUp start={0} end={50}/>+</h1>
                        <h2>Volunteer / Members</h2>
                    </div>
                    <div className='achivement_div1' data-aos='fade-up' data-aos-delay='100'>
                        <h1>10K+</h1>
                        <h2>People received Help</h2>
                    </div>
                    <div className='achivement_div1' data-aos='fade-up' data-aos-delay='200'>
                        <h1>430+</h1>
                        <h2>Completed projects
</h2>
                    </div>

                    <div className='achivement_div1' data-aos='fade-up' data-aos-delay='300'>
                        <h1>10+</h1>
                        <h2>Winning award
</h2>
                    </div>
                </div>
            </div>
        </>
   
    )
}

export default Achivements
