import React from 'react'
import ComponentsName from '@/components/atoms/ComponentsName'
import SendEmail from '@/components/organism/SandEmail'
import { useSelector } from 'react-redux';
import Spiner from '@/components/atoms/Spiner';
import PageActive from '@/components/atoms/PageActive'

function Contact() {
  const isLoading = useSelector((state) => state.isLoading.isLoading);
  return (
    <>
      <ComponentsName title={'CONTACT'}/>
      <SendEmail/>
      {isLoading && (<Spiner/>)}
      <PageActive/>
    </>
  )
}

export default Contact