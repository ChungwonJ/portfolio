import React from 'react'
import ComponentsName from '@/components/atoms/ComponentsName'
import PageActive from '@/components/atoms/PageActive'
import Parallax from '@/components/atoms/Parallax'
import { SIDELIST } from '@/define/dummy'

function SideProject() {
  return (
    <>
      <ComponentsName title={'SIDEPROJECT'}/>
      <PageActive />
      <Parallax ITEM={SIDELIST}/>
    </>
  )
}

export default SideProject