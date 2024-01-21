import React from 'react'
import { useState } from 'react'
import Sidebar from './Component/Sidebar'
import Navbar from './Component/Navbar'
import Seepost from './Component/Seepost'
import Create from './Component/Create'
import './App.css';

function Home() {

  const [click,setClick] = useState(true)

  const toggleclick = () =>{
    setClick(previewclick => !previewclick)
  }

  return (
    <div>
      <Navbar />
      <div className='appcont'>
      <Sidebar toggleclick={toggleclick} />
      <div>
          {click ? <Seepost /> : <Create /> }
      </div>
      </div>

      
    </div>
  )
}

export default Home
