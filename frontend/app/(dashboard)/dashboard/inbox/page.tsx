import React from 'react'
import Header from '../components/Header'
import ComingSoon from '@/app/components/ComingSoon'

const page = () => {
  return (
    <div className='w-full h-full'>
      <Header headerName='Inbox' />
      <ComingSoon />
    </div>
  )
}

export default page