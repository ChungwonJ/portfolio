import GaugeBar from '@/components/atoms/GaugeBar'
import { TACHLIST } from '@/define'
import React from 'react'

function Introduction() {
  return (
    <>
      <section id='introduction'>
        <div className='container'>
          <h1>About Me</h1>
          <div className='about'>
            <div data-aos="fade-right" data-aos-duration="3000">
              <img src="/images/me.jpg" alt="" />
            </div>
            <div className='aboutTxt'>
              <h2>Tech</h2>
              {TACHLIST.map((item, index) => (
                <div className='gaugeBarGrid' data-aos="flip-right" data-aos-duration="3000" key={index}>
                  <div className='gaugeBarGridOne'>
                    <h3>{item.tool}</h3>
                    <span>{item.value}%</span>
                  </div>
                  <GaugeBar value={item.value} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Introduction