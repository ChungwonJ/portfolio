import React from 'react'
import { GrPersonalComputer } from "react-icons/gr";

function AboutCard() {
  return (
    <>
      <div className='aboutCard'>
        <div className='aboutCardGrid'>
          <h2>
            <GrPersonalComputer />
            Frontend Developer
          </h2>
          <p>
            안녕하세요! 저는 웹 프론트엔드 개발자, 정청원입니다.
            저는 사용자 중심의 인터랙티브한 웹 경험을 설계하고 구현하는 것을 좋아합니다.
          </p>
          <div>
            <h3>SKILLS</h3>
            <p>#Html, #Css3, #Scss, #React, #Next, #Redux, #Redux-Toolkit, #MongoDb</p>
          </div>
          <div>
            <h3>TOOLS</h3>
            <p>Vs Code, Github, BonoboGit</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard