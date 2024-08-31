import React from 'react'
import Header from '../components/Header'
import MyTask from './components/MyTask'

const page = () => {
  return (
    <div className='w-full h-full'>
      <Header headerName='My tasks' />
      <MyTask />
    </div>
  )
}

export default page