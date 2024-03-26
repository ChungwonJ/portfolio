import React from 'react'
import Result from '@/components/template/Result'
import { WORKLIST } from '@/define'

function Work() {
  return (
    <>
      <Result title={'Work'} CARDITEM={WORKLIST}/>
    </>
  )
}

export default Work