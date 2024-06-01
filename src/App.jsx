import { useState } from 'react'
import './App.css'
import Loader from './comp/Loader'
import Navbar from './comp/Navbar'
import Explore from './page/Explore'
// import CopyEmailButton from './comp/Email'

function App() {
 

  return (
    <>
    <div className='w-full h-full static'>
      <Navbar/>
      
    </div>

    <div className='bg-black absolute my-20'><Explore/></div>

    
    
    
    {/* <div className='w-full h-screen bg-black '>
      <Loader/>
    </div> */}
      
    </>
  )
}

export default App
