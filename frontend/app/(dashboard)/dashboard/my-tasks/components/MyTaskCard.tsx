'use client'

import * as React from "react";
import clsx from "clsx";
import Swal from 'sweetalert2';

// Components import
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Icons import
import { IoIosHourglass } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdDoneAll } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

import { formatDate } from "@/lib/formatDate";

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

type MyTaskCardProps = {
  tasks: Task[];
}

export function MyTaskCard({tasks}: MyTaskCardProps) {

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <>
      {tasks && tasks.map((task) => (
        <Card className="h-auto">
          <CardHeader>
            <CardTitle>{task.title}</CardTitle>
            <CardDescription>{task.description}</CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <div className="w-full flex items-center justify-between">
              <div className={clsx(
                'flex items-center gap-1', {
                  'text-[#FFA500]': task.status === 'pending',
                  'text-[#1E90FF]': task.status === 'active',
                  'text-[#32CD32]': task.status === 'completed'
                }
              )}>
                <p className="text-sm">{task.status}</p>
                {task.status === 'pending' && <IoIosHourglass />}
                {task.status === 'active' && <FaCircle />}
                {task.status === 'completed' && <IoMdDoneAll />}
              </div>
              <div>
                <p className={clsx('text-sm', {
                  'text-[#FF4500]': task.priority === 'high',
                  'text-[#FFA500]': task.priority === 'medium',
                  'text-[#32CD32]': task.priority === 'low'
                })}><span className='capitalize'>{task.priority}</span> priority</p>
              </div>
            </div>
            <div className='w-full mt-2'>
              <div className='w-full flex justify-between items-center text-xs mb-1'>
                <span>Progress</span>
                <span>{task.progress}%</span>
              </div>
              <Progress value={task.progress} className='w-full' />
            </div>
            <div className="text-sm mt-3">
              Due date: <span>{formatDate(task.due_date)}</span>
            </div>
            <div className="w-full flex items-center justify-end gap-2">
              <FaEdit className='text-[#4CAF50] cursor-pointer'/>
              <RiDeleteBin6Line className='text-[#FF0000] cursor-pointer' onClick={handleDelete}/>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
