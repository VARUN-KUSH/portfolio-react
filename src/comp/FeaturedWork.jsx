import React from 'react'

const FeaturedWork = ({imgsrc, project_title}) => {
  return (
    <div className='bg-[#1c1c1c] my-6 px-2 py-2 rounded-lg'>
        <div>
            <img src={imgsrc} alt="project image"/>
        </div>

        <div>
           {project_title}
        </div>
        
    </div>
  )
}

export default FeaturedWork