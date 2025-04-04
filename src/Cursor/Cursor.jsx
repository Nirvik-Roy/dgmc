import React from 'react'
import gsap from 'gsap'; // <--- import GSAP
import { useGSAP } from '@gsap/react'; 
import './Cursor.css'
const Cursor = ({x,y}) => {
   useGSAP(()=>{
     gsap.to('.cursor_circle_outside',{
      x:x,
      y:y,
   
     })
   },[x,y])
 console.log(x,y)
  return (
    <>
      <div  className='cursor_circle_outside'>
        <div className='cursor_circle_inside'></div>
      </div>
    </>
  )
}

export default Cursor
