import React from 'react'
import Result from '@/components/template/Result'
import { WORKLIST } from '@/define'

function Side() {
  return (
    <>
      <Result title={'SideProject'} CARDITEM={WORKLIST}/>
    </>
  )
}

export default Side