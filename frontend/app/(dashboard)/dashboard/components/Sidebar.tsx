"use client"
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

// Icons import
import { MdSpaceDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

const Sidebar = () => {

    const comps = [
        {
            name: 'Home',
            icon: <MdSpaceDashboard />,
            url: '/dashboard'
        },
        {
            name: 'My tasks',
            icon: <FaTasks />,
            url: '/dashboard/my-tasks'
        },
        {
            name: 'Team',
            icon: <FaUsers />,
            url: '/dashboard/team'
        },
        {
            name: 'Inbox',
            icon: <MdEmail />,
            url: '/dashboard/inbox'
        },
        {
            name: 'Settings',
            icon: <IoMdSettings />,
            url: '/dashboard/settings'
        },
    ]

    const pathname = usePathname();
    const router = useRouter()

    const handleRouter = (route: any) => {
        router.push(route)
    }

    return (
        <aside className='w-full h-full bg-main p-5 shadow-md relative'>
            <h1 className='text-center text-main text-3xl font-bold italic'>Manager</h1>
            <ul className='w-full mt-12 flex flex-col gap-4'>
                {comps.map((comp, index) => (
                    <li key={index}
                        onClick={() => handleRouter(comp.url)}
                        className={
                            clsx('h-[40px] flex items-center gap-3 px-2 rounded-md cursor-pointer', 
                                {
                                    'bg-white text-main font-semibold': comp.url === pathname,
                                    'text-white font-light': comp.url !== pathname
                                }
                            )}
                        >
                        <p>{comp.icon}</p>
                        <p>{comp.name}</p>
                    </li>
                ))}
            </ul>
            <div className='absolute bottom-[10%] w-[80%]'>
                <div className='border-white text-white hover:bg-[#00000023] transition-colors ease duration-300 w-full h-[40px] border rounded-sm flex items-center justify-center cursor-pointer'>
                    <p>Logout</p>
                    <MdOutlinePowerSettingsNew />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
