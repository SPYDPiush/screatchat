import React, { useState } from 'react'
import img from '../assets/Images/Logo.png'
import './Navbar.css';

function Navbar() {

  const [login,setLogin] = useState(false)

  const handleonclicklogin = () =>{


  }

  const handleonclickregister = () => {
    
  }
  return (
    <div className='h-[7rem] w-[100%] fixed text-white bg-[#77a83f] p-4 box-border'>
      <div className="nav_outer flex justify-between items-center">
        <div className='logo h-[5.2rem] w-[5.2rem]'>
          <img src={img} alt='logo'  className='w-[100%]'/>
        </div>
        <div className='navtag flex justify-between text-lg md:text-2xl hover:cursor-pointer' style={{ flexBasis: '170px' }}>
          <div className='tags'> Home </div>
          <div className='tags'>
            About
          </div>
        </div>
        <div className='navlink flex justify-between text-lg md:text-2xl hover:cursor-pointer' style={{ flexBasis: '170px' }}>
          <div className='tags' onClick={handleonclicklogin}>
            Login
          </div>
          <div className='tags' onClick={handleonclickregister}>
            Register
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
