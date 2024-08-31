import { Calendar } from '@/components/ui/calendar';
import React from 'react'

import { IoMdAdd } from "react-icons/io";
import { BarChartContainer } from './BarChartContainer';
import { PieChartContainer } from './PieChartContainer';
import { Progress } from '@/components/ui/progress';
import { SheetContainer } from './SheetContainer';
import Link from 'next/link';
import { TaskCard } from './TaskCard';


const DashboardBody = () => {
    return (
        <section className='w-full h-[calc(100vh-80px)] pt-5 px-5'>
            <div className='w-full grid grid-cols-3 gap-5'>
                <div className=''>
                    <h2 className='text-main'>Welcome, <b> Ayomide!</b></h2>
                    <h1 className='font-semibold text-2xl'>You've got 8 tasks <br /> today</h1>
                </div>
                <div className='bg-white h-[100px] px-5 py-1 text-primary rounded-lg'>
                    <div>
                        <div className='flex items-center justify-between w-full'>
                            <h3 className='font-semibold text-lg'>My Tasks</h3>
                            <Link href='/' className='text-xs'>All</Link>
                        </div>
                        <ul className='w-full flex items-center gap-3 text-sm'>
                            <li className='cursor-pointer '>Today</li>
                            <li className='cursor-pointer text-[#C7C7C7]'>yesterday</li>
                        </ul>
                        <div className='w-full mt-2'>
                            <div className='w-full flex justify-between items-center text-xs mb-1'>
                                <span>Progress</span>
                                <span>60%</span>
                            </div>
                            <Progress value={60} className='w-full' />
                        </div>
                    </div>
                </div>
                <div className='bg-primary h-[100px] flex items-center justify-between px-5 py-3 text-white rounded-lg'>
                    <div>
                        <h3 className='font-semibold'>Create Task</h3>
                        <p className='text-[#C7C7C7] text-sm'>Create a new task</p>
                    </div>
                    <SheetContainer />
                </div>
            </div>

            <div className='w-full grid grid-cols-3 gap-5 mt-5'>
                <div>
                    <BarChartContainer />
                </div>
                <div>
                    <TaskCard />
                    {/* <PieChartContainer /> */}
                </div>
                <div className='rounded-lg border bg-card text-card-foreground shadow-sm py-5 px-3'>
                    <Calendar />
                </div>

            </div>
        </section>
    )
}

export default DashboardBody
