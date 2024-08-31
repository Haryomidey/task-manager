"use client"
import React from 'react';
import {useRouter} from 'next/navigation';
import { Button } from '@/components/ui/button';

const ComingSoon = () => {
    const router = useRouter();
    return (
        <div className='w-full h-[calc(100vh-80px)] pt-5 px-5 flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-semibold text-center pb-5'>Coming Soon!!!!!!!!!!!</h1>
            <Button>Return to Dashboard</Button>
        </div>
    )
}

export default ComingSoon;