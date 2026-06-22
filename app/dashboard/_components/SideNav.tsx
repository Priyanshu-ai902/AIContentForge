"use client"

import { History, HomeIcon, Settings, Wallet2 } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation' 
import React from 'react'
import UsageTrack from './UsageTrack'
import { motion } from 'framer-motion'

interface SideNavProps {
    onClose?: () => void;
}

function SideNav({ onClose }: SideNavProps) {
    const router = useRouter(); 
    const path = usePathname();

    const MenuList = [
        {
            name: 'Home',
            icon: HomeIcon,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: History,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: Wallet2,
            path: '/dashboard/billing'
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings'
        },
    ]

    const handleNavigation = (targetPath: string) => {
        router.push(targetPath);
        if (onClose) {
            onClose();
        }
    }

    return (
        <div className='h-full relative pt-6 md:pt-4 pb-6 px-4 bg-[#090d16]/90 backdrop-blur-md border border-slate-800/60 rounded-2xl flex flex-col justify-between text-slate-200 shadow-xl overflow-hidden'>
            <div>
                {/* Branding/Title inside sidebar (hidden on large if top header is enough, but nice for drawer) */}
                <div className='px-3 mb-6 block md:hidden'>
                    <h2 className='text-xl font-bold bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 text-transparent bg-clip-text'>
                        Content-Forge
                    </h2>
                </div>

                <div className="space-y-1">
                    {MenuList.map((menu, index) => {
                        const isActive = path === menu.path;
                        return (
                            <motion.div 
                                key={index} 
                                whileHover={{ x: 4, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex gap-3 px-4 py-3 rounded-xl cursor-pointer items-center transition-all duration-200 relative group
                                ${isActive 
                                    ? 'bg-gradient-to-r from-purple-500/10 to-cyan-500/5 text-purple-400 font-semibold border border-purple-500/20' 
                                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/40'
                                }`}
                                onClick={() => handleNavigation(menu.path)} 
                            >
                                <menu.icon className={`h-5 w-5 transition-transform group-hover:scale-110 ${isActive ? 'text-purple-400' : 'text-slate-400 group-hover:text-slate-300'}`} />
                                <span className='text-[15px]'>{menu.name}</span>
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeIndicator"
                                        className="absolute left-0 top-3 bottom-3 w-[3px] bg-gradient-to-b from-purple-500 to-cyan-500 rounded-r-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            <div className="w-full">
                <div className="my-4 border-t border-slate-900/60" />
                <UsageTrack />
            </div>
        </div>
    )
}

export default SideNav
