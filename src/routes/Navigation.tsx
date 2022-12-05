import React from 'react'
import { BrowserRouter ,  Navigate,  NavLink,  Route, Routes } from 'react-router-dom'
import logo from '../assets/img/logo192.png'
import { Home } from '../pages/Home'


export const Navigation = () => {
  return (
 <>
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={logo} alt="logo" />       
         <ul>
            <li>
                <NavLink to="/"  >Home</NavLink>
            </li>
            <li>
                <NavLink to="/home" >Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" >About</NavLink>
            </li>
            <li>
                <NavLink to="/contact" >Contact</NavLink>
            </li>
         </ul>
        </nav>

        <Routes >
            <Route path="/" element={<Home />  } />
            <Route path="/home" element={<Home /> } />
            <Route path="/about" element={<h1>about</h1>} />
            <Route path="/contact" element={<h1>contact</h1>} />      

            <Route path="/*" element={<Navigate to="/home" replace />} />      
        </Routes>
        </div>
    </BrowserRouter>
 
 </>
  )
}
