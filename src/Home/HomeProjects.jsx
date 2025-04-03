import React from 'react'
import img from '../assets/358490769_unemployment.jpg'
import img2 from '../assets/619853351_covid-hospital-india-16369471573x2.jpg'
import img3 from '../assets/624992158_Screenshot_2025_0216_175631.jpg'
import img4 from '../assets/296745101_7962037506_1720b96cba_z.jpg'
import img5 from '../assets/553714517_2151494251.jpg'
const HomeProjects = () => {
  return (
    <div className='home_project_wrapper'>
<div className='universal_container'>
<div style={{

display: 'flex',
justifyContent: 'center',
alignItems: 'center',
columnGap: '10px'
}}>
<i class="fa-solid fa-heart" style={{
    color: 'rgb(66, 159, 64)'
}}></i>
<p className='heading_para' style={{
    textAlign:'center',
    lineHeight:'30px'
   
}}>Every project we undertake is driven by our unwavering <br/> commitment to making a difference</p>
</div>

       <h1 style={{
        textAlign:'center'
       }} className='about_head'>Our <span>Projects</span></h1>

       <div className='projects_card_wrapper'>
        <div className='project_1'>
            <img src={img}/>
            <div className='project_details_div'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 1</h6>
                <p>Refund And Cancellation</p>
            </div>

            <div className='project_details_div2'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 1</h6>
                <p>Refund And Cancellation</p>
                <h6 style={{
                    marginTop:'15px',
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    columnGap:'10px',
                    fontSize:'12px'
                }}>Know More <i class="fa-solid fa-arrow-right" ></i></h6>
            </div>
        </div>
        <div className='project_1'>
        <img src={img2}/>
            <div className='project_details_div'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 2</h6>
                <p>Healthcare</p>
            </div>

            <div className='project_details_div2'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 2</h6>
                <p>Healthcare</p>
                <h6 style={{
                    marginTop:'15px',
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    columnGap:'10px',
                    fontSize:'12px'
                }}>Know More <i class="fa-solid fa-arrow-right" ></i></h6>
            </div>
        </div>
        <div className='project_1'>
        <img src={img3}/>
            <div className='project_details_div'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 3</h6>
                <p>Education</p>
            </div>

            <div className='project_details_div2'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 3</h6>
                <p>Education</p>
                <h6 style={{
                    marginTop:'15px',
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    columnGap:'10px',
                    fontSize:'12px'
                }}>Know More <i class="fa-solid fa-arrow-right" ></i></h6>
            </div>
        </div>
        <div className='project_1'>
        <img src={img4}/>
            <div className='project_details_div'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 4</h6>
                <p>Human Rights</p>
            </div>

            <div className='project_details_div2'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 4</h6>
                <p>Human Rights</p>
                <h6 style={{
                    marginTop:'15px',
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    columnGap:'10px',
                    fontSize:'12px'
                }}>Know More <i class="fa-solid fa-arrow-right" ></i></h6>
            </div>
        </div>
        <div className='project_1'>
        <img src={img}/>
            <div className='project_details_div'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 5</h6>
                <p>Environment</p>
            </div>

            <div className='project_details_div2'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 5</h6>
                <p>Environment</p>
                <h6 style={{
                    marginTop:'15px',
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    columnGap:'10px',
                    fontSize:'12px'
                }}>Know More <i class="fa-solid fa-arrow-right" ></i></h6>
            </div>
        </div>
        <div className='project_1'>
        <img src={img5}/>
            <div className='project_details_div'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 6</h6>
                <p>Disaster Relief</p>
            </div>
            <div className='project_details_div2'>
            <h6> <i class="fa-solid fa-tags fa-rotate-90"></i> Project 6</h6>
                <p>Disaster Relief</p>
                <h6 style={{
                    marginTop:'15px',
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    columnGap:'10px',
                    fontSize:'12px',
                }}>Know More <i class="fa-solid fa-arrow-right" ></i></h6>
            </div>
        </div>
      
       </div>
      </div>
    </div>
    
  )
}

export default HomeProjects
