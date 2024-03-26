import SendEmail from '@/components/organism/SandEmail'
import React from 'react'

function Contact(props) {
  return (
    <>
      <section>
        <div className='container'>
        <h1>CONTACT</h1>
        <div>
          <SendEmail
            setIsLoading={props.setIsLoading}
          />
        </div>
        </div>
      </section>
    </>
  )
}

export default Contact