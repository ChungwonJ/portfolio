import Link from 'next/link'
import React, { useState } from 'react'

function ProjectCard(props) {
  return (
    <>
      {props.CARDITEM.map((item, index) => (
        <div className='card' key={index}>
          <div className='cardImg'>
            <img src={item.imgSrc} alt="" />
          </div>
          <div className='cardTxt'>
            <p>{item.title}</p>
            <p>작업내용 : {item.content}</p>
            {item.tech && item.tech.length > 0 && <p>Tech : {item.tech}</p>}
            <div className='cardBtn'>
              <Link className='cardLink button btnPush btnBlueGreen' href={item.link} target='_blank'>VIEW</Link>
              {item.git && item.git.length > 0 && <Link href={item.git}>GIT</Link>}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectCard