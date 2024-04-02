import React from 'react'
import ComponentsName from '@/components/atoms/ComponentsName'
import PageActive from '@/components/atoms/PageActive'
import Parallax from '@/components/atoms/Parallax'
import { WORKLIST } from '@/define/dummy'

function Work() {
  return (
    <>
      <section>
        <ComponentsName title={'WORK'} />
        <PageActive />
        <Parallax ITEM={WORKLIST}/>
      </section>
    </>
  )
}

export default Work