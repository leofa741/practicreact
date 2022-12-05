import React from 'react'
import { BrowserRouter ,  Navigate,  NavLink,  Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Navbar } from '../components/Navbar';


export const Navigation = () => {
  return (
 <>
    <BrowserRouter>
   
       <Navbar  />

        <Routes >
            <Route path="/"  element={<Home />  } />
            <Route path="/home"   element={<Home /> } />
            <Route path="/about" element={<h1>about</h1>} />
            <Route path="/contact" element={<h1>contact</h1>} />      

            <Route path="/*" element={<Navigate to="/home" replace />} />      
        </Routes>
        
    </BrowserRouter>
 
 </>
  )
}
