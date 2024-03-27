import React from 'react'
import Result from '@/components/template/Result'
import { WORKLIST } from '@/define'

function Work() {
  return (
    <>
      <div id='work'>
        <Result title={'Work'} CARDITEM={WORKLIST} />
      </div>
    </>
  )
}

export default Work