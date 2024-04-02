import ComponentsName from '@/components/atoms/ComponentsName'
import PageActive from '@/components/atoms/PageActive'
import AboutCard from '@/components/mocules/AboutCard'
import React from 'react'

function About() {
  return (
    <>
      <section>
        <ComponentsName title={'ABOUT'} />
        <AboutCard/>
      </section>
      <PageActive/>
    </>
  )
}

export default About