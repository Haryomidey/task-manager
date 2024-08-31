import React from 'react'
import Header from './components/Header'
import DashboardBody from './components/DashboardBody'

const page = () => {
  return (
    <div className='w-full h-full'>
      <Header headerName='Dashboard' />
      <DashboardBody />
    </div>
  )
}

export default page
