import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa6";

function JobCard({item}) {
  return (
    <>
      <div className='jobCard'>
        <div className='jobCardGrid'>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <p>{item.tech}</p>
          <div className='jobCardBtn'>
            <Link href={item.link} target='_blank'>View</Link>
            {item.git && item.git.length > 0 && <Link href={item.git} target='_blank'><FaGithub /></Link>}
          </div>
        </div>
      </div>
    </>
  )
}

export default JobCard