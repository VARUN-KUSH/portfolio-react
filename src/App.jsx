import { useState } from 'react'
import './App.css'
import Loader from './comp/Loader'
import Navbar from './comp/Navbar'
import Explore from './page/Explore'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './comp/Footer'
// import CopyEmailButton from './comp/Email'

function App() {
 
  const location = useLocation();
  return (
    <>
    <Navbar/>
    {location.pathname === '/' ? <Explore /> : <Outlet />}
   
    
    <Footer/>

  
    
    

    
    
    
    {/* <div className='w-full h-screen bg-black '>
      <Loader/>
    </div> */}
      
    </>
  )
}

export default App
