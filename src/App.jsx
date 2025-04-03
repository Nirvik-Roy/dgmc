import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Home from './Home/Home'

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
