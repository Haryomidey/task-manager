"use client"

import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

import { IoSearch, IoNotificationsOutline } from "react-icons/io5";

import { HeaderDropDown } from './HeaderDropDown';
import { Notification } from './Notification';

interface HeaderProps {
    headerName: string;
}

const Header: React.FC<HeaderProps> = ({headerName}) => {
    return (
        <header className='mb-[85px]'>
            <div className='fixed top-0 w-full sm:w-[80%] bg-white h-[80px] shadow-md flex items-center justify-between px-5 z-50'>
                <div>
                    <h1 className='font-semibold text-xl'>{headerName}</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='w-10 h-10 border rounded-full grid place-items-center cursor-pointer'>
                        <IoSearch />
                    </div>
                    <div className='w-10 h-10 border rounded-full grid place-items-center cursor-pointer '>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="grid place-items-center">
                                    <IoNotificationsOutline />
                                </div>
                            </DropdownMenuTrigger>
                            <Notification />
                        </DropdownMenu>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className='cursor-pointer'>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>OA</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <HeaderDropDown />
                    </DropdownMenu>
                    <div className='hidden sm:flex flex-col gap-1 text-sm'>
                        <p className='font-semibold'>Oladiipo Ayomide</p>
                        <small>Web developer</small>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
