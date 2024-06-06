import React from 'react'

const Projectdetails = ({title, imgsrc1, imgsrc2, imgsrc3, imgsrc4, para1, para2, para3, github}) => {
  return (
    <div>
        <div>{title}</div>
        <img src={imgsrc1} />

        <p>{para1}</p>
        <img src={imgsrc2}/>

        <p>{para2}</p>
        <img src={imgsrc3}/>

        <div>
        <p>{para3}</p>
        <img src={imgsrc4} />
        </div>
        
        <a href={github}></a>
        <a href={webapp}></a>
    </div>
  )
}

export default Projectdetails