import React from 'react'
import ComponentsName from '@/components/atoms/ComponentsName'
import PageActive from '@/components/atoms/PageActive'
import Parallax from '@/components/atoms/Parallax'
import { SIDELIST } from '@/define/dummy'
import MouseScroll from '@/components/atoms/MouseScroll'

function SideProject() {
  return (
    <>
      <ComponentsName title={'SIDEPROJECT'}/>
      <PageActive />
      <Parallax ITEM={SIDELIST}/>
      <MouseScroll/>
    </>
  )
}

export default SideProject