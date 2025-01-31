"use client"

import { History, HomeIcon, Settings, Wallet2 } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation' 
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'

function SideNav() {
    const router = useRouter(); 
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
            path:'/dashboard/settings'
        },
    ]

    const path = usePathname();
    useEffect(()=>{
        // console.log(path)
    },[])

    return (
        <div className='border h-screen relative pt-20 bg-gradient-to-r from-gray-800 to-slate-900'>
            
            <div className=" mt-5">
                {MenuList.map((menu,index)=>(
                    <div 
                        key={index} 
                        className={`flex gap-4 mb-2 p-3 
                        hover:bg-purple-500 hover:text-white rounded-lg cursor-pointer items-center
                        ${path==menu.path&&'bg-purple-500 text-white'}`}
                        onClick={() => router.push(menu.path)} 
                    >
                        <menu.icon className='h-7 w-7 text-purple-200 '/>
                        <h2 className='text-xl text-yellow-50'>{menu.name}</h2>
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

