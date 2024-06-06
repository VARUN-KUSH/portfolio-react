import React from 'react'

const Stacks = () => {
  return (
    <div className='bg-black px-6 py-8 border-solid border-[0.1px] border-[#282828] rounded-md flex flex-col gap-2 '>
      <div className='mb-4'>
        <div>Stack</div>
        <p className='font-thin text-xs'>resources used</p>
      </div>
       
        <div>MERN</div>
        <div>LLM'S API'S <span className='text-blue-400 font-thin text-xs'>Gemini</span></div>
        <div>Next js</div>
        <div>UI <span className='text-blue-400 font-thin text-xs'>Tailwind, Shadcn, Park UI</span></div>
        <div>FIGMA</div>
        <div>
            <button className='bg-[#181818] px-20 py-1 font-medium font-sans rounded-md ml-2'>All Tools</button>
        </div>
    </div>
  )
}

export default Stacks
