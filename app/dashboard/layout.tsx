"use client"

import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [totalUsage, setTotalUsage] = useState<Number>(0);
    const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    
    const pathname = usePathname();
    const isWorkspace = pathname.includes('/dashboard/content/');

    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <UpdateCreditUsageContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
                <div className='min-h-screen bg-[#07090e] text-slate-100 relative'>
                    
                    {/* Desktop Sidebar - Detached Glass Card (Hidden in Workspace Mode) */}
                    {!isWorkspace && (
                        <div className="md:w-60 hidden md:block fixed top-[104px] bottom-6 left-6 z-40">
                            <SideNav />
                        </div>
                    )}

                    {/* Mobile Sidebar Hamburger Button (Hidden in Workspace Mode) */}
                    {!isWorkspace && (
                        <button 
                            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                            className="md:hidden fixed bottom-6 right-6 z-[60] bg-purple-600 hover:bg-purple-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-purple-500/20"
                            aria-label="Toggle Navigation Menu"
                        >
                            {isMobileSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    )}

                    {/* Mobile Drawer Navigation with AnimatePresence */}
                    <AnimatePresence>
                        {isMobileSidebarOpen && !isWorkspace && (
                            <>
                                {/* Overlay backdrop */}
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsMobileSidebarOpen(false)}
                                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[45] md:hidden"
                                />

                                {/* Drawer content */}
                                <motion.div 
                                    initial={{ x: "-100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "-100%" }}
                                    transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                                    className="fixed top-0 bottom-0 left-0 w-72 max-w-[80vw] z-50 md:hidden"
                                >
                                    <SideNav onClose={() => setIsMobileSidebarOpen(false)} />
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>

                    {/* Main Content Area - Expands to full width in Workspace Mode */}
                    <div className={`pt-[104px] pb-10 px-6 lg:px-8 min-h-screen transition-all duration-300 ${isWorkspace ? 'md:ml-0' : 'md:ml-[288px]'}`}>
                        <div className={`${isWorkspace ? 'max-w-[1600px]' : 'max-w-[1400px]'} mx-auto w-full`}>
                            {children}
                        </div>
                    </div>

                </div>
            </UpdateCreditUsageContext.Provider>
        </TotalUsageContext.Provider>
    )
}

export default Layout
