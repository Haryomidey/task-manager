import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegCircleCheck, FaCircleCheck } from "react-icons/fa6";

export function TaskCard() {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle className="text-xl">Task lists <span className="text-[#C7C7C7]">(05)</span></CardTitle>
        <CardDescription>These are your recent tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="w-full flex flex-col gap-3">
            <li className="flex items-center justify-between w-full border-b pb-3">
                <div className='flex items-center gap-3 text-sm'>
                    <span>01</span>
                    <span>Complete Mahasad VTU UI</span>
                </div>
                <p>
                   <FaRegCircleCheck />
                </p>
            </li>
            <li className="flex items-center justify-between w-full border-b pb-2">
                <div className='flex items-center gap-3 text-sm'>
                    <span>02</span>
                    <span>Complete Mahasad VTU UI</span>
                </div>
                <p>
                   <FaRegCircleCheck />
                </p>
            </li>
            <li className="flex items-center justify-between w-full border-b pb-2">
                <div className='flex items-center gap-3 text-sm'>
                    <span>03</span>
                    <span>Complete Mahasad VTU UI</span>
                </div>
                <p>
                    <FaCircleCheck className="text-[#2EB67D]" />
                </p>
            </li>
            <li className="flex items-center justify-between w-full border-b pb-2">
                <div className='flex items-center gap-3 text-sm'>
                    <span>04</span>
                    <span>Complete Mahasad VTU UI</span>
                </div>
                <p>
                   <FaCircleCheck className="text-[#2EB67D]" />
                </p>
            </li>
            <li className="flex items-center justify-between w-full border-b pb-2">
                <div className='flex items-center gap-3 text-sm'>
                    <span>05</span>
                    <span>Complete Mahasad VTU UI</span>
                </div>
                <p>
                   <FaRegCircleCheck />
                </p>
            </li>
            <li className="flex items-center justify-between w-full border-b pb-2">
                <div className='flex items-center gap-3 text-sm'>
                    <span>06</span>
                    <span>Complete Mahasad VTU UI</span>
                </div>
                <p>
                   <FaRegCircleCheck />
                </p>
            </li>
        </ul>
      </CardContent>
    </Card>
  )
}
