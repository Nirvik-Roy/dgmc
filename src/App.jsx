import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Home from './Home/Home'
import Cursor from './Cursor/Cursor'

function App() {
const [position,setposition]=useState({
  x:0,
  y:0
})
const MouseMove = (e) =>{
  setposition({
    x:e.clientX,
    y:e.clientY
  })
}
  return (
   <>
   <div onMouseMove={((e)=>MouseMove(e))}>
   <Cursor x={position.x} y={position.y}/>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </div>

   </>
  )
}

export default App
