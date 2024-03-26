import React from 'react'
import ProjectCard from '@/components/mocules/ProjectCard'

function Result(props) {
  return (
    <>
      <section className='work'>
        <div className='container'>
          <h1>{props.title}</h1>
          <div className='workGrid' data-aos="fade-up" data-aos-duration="3000">
            <ProjectCard CARDITEM={props.CARDITEM} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Result