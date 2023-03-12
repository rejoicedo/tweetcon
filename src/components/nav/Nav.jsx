import { useState } from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'

const Nav = () => {
  const [toggle, settoggle] = useState(false)
  
  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="" />
        <button type="submit">Get your ticket</button>
        
      </div>
      
    </nav>
  )
}

export default Nav


