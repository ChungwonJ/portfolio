import React from 'react'
import Result from '@/components/template/Result'
import { SIDELIST } from '@/define'

function Side() {
  return (
    <>
      <div id='side'>
        <Result title={'SideProject'} CARDITEM={SIDELIST} />
      </div>
    </>
  )
}

export default Side