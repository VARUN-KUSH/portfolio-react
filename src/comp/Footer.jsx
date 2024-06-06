import React from 'react'

const Footer = () => {
  return (
    <div className='text-xs flex flex-col gap-4 justify-center items-center text-white my-8'>
        <div>Let's <a className='text-blue-400' 
        href="https://wa.me/7303023992"
        target="_blank"
        rel="noopener noreferrer">Chat</a></div>
        <div>@2024 Portfolio</div>
    </div>
  )
}

export default Footer