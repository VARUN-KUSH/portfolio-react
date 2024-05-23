import { useState } from 'react'
import './App.css'
import Loader from './comp/Loader'
import Sidebar from './comp/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-full'>
      <Sidebar/>
    </div>
    {/* <div className='w-full h-screen bg-black '>
      <Loader/>
    </div> */}
      
    </>
  )
}

export default App
