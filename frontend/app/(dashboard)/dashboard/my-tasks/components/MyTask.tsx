'use client'

import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { IoMdAdd } from "react-icons/io";
import { FiDownloadCloud } from "react-icons/fi";
import { IoSearch, IoFilterSharp } from "react-icons/io5";
import { MyTaskCard } from './MyTaskCard';
import { SheetContainer } from '../../components/SheetContainer';

import tasks from '@/app/utils/tasks.json';

type Task = {
    id: number;
    title: string;
    description: string;
    priority: 'high' | 'low' | 'medium';
    status: 'pending' | 'active' | 'completed';
    progress: number;
    due_date: string;
    created_At: string;
}

const MyTask = () => {

    const [taskList, setTaskList] = useState<Task[]>([]);

    useEffect(() => {
        setTaskList(tasks as Task[])
    }, [tasks]);

    return (
        <div className='w-full h-[calc(100vh-80px)] pt-5 px-5'>
            <div className='flex flex-wrap items-center justify-between gap-5'>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold'>Tasks</p>
                    <span className='text-light px-3 py-1 rounded-3xl bg-slate-300 text-xs'>{taskList.length} tasks</span>
                </div>
                <div className='flex items-center gap-4'>
                    <Button className='flex items-center gap-2 bg-transparent text-primary border border-primary hover:text-white ease duration-300 transition'><FiDownloadCloud /> Import</Button>
                    <SheetContainer type={'yes'} />
                </div>
            </div>
            <div className='w-full flex justify-end gap-3 mt-4'>
                <div className='flex items-center gap-2 w-56 h-[40px] border border-[#d9d9d9] rounded-md px-2'>
                    <IoSearch />
                    <input 
                        type="text"
                        className='w-full h-full outline-none bg-transparent'
                        placeholder='Search'
                    />
                </div>
                <Button className='flex items-center gap-2 bg-transparent text-primary border border-[#d9d9d9] hover:text-white ease duration-300 transition'>
                    <IoFilterSharp />
                    Filter
                </Button>
            </div>

            {/* Cards */}
            <div className='w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7 pb-10'>
                {taskList.length > 0 && <MyTaskCard tasks={taskList} />}
                {taskList.length < 1 && <div className='flex items-center justify-center'>
                    No Task yet!!!
                </div>}
            </div>
        </div>
    )
}

export default MyTask
