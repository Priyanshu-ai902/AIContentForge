"use client"

import { History, HomeIcon, Settings, Wallet2 } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

function SideNav() {

    const MenuList=[
        {
            name:'Home',
            icon:HomeIcon,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:History,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:Wallet2,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        },

    ]

    const path=usePathname();
    useEffect(()=>{
        // console.log(path)
    },[])
    return (
        <div className='border h-screen relative'>
            <div className=' flex border-b gap-3'>
                <Image className='rounded-lg' src='https://cdn4.vectorstock.com/i/1000x1000/41/03/content-production-icon-on-white-vector-33264103.jpg' alt='logo' width={50} height={50} />
                <span className='text-pink-600  font-semibold pt-4 text-lg'>AIContentForge
                </span>
            </div>
            <div className=" mt-5">
                {MenuList.map((menu,index)=>(
                    <div key={index} className={`flex gap-2 mb-2 p-3 
                    hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
                    ${path==menu.path&&'bg-primary text-white'}`}>
                        <menu.icon className='h-6 w-6'/>
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <UsageTrack/>
            </div>
        </div>
    )
}

export default SideNav
