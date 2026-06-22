"use client";

import React, { useContext, useState } from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'; 
import UpgradeModal from './UpgradeModal'; 

function TemplateCard(item: TEMPLATE) {
  const { totalUsage } = useContext(TotalUsageContext);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (Number(totalUsage) >= 13000) {
      e.preventDefault();  
      setIsUpgradeModalOpen(true);  
    }
  };

  return (
    <>
      <Link href={'/dashboard/content/' + item?.slug} onClick={handleClick} className="block h-full">
        <div className="h-full p-6 shadow-xl rounded-[20px] bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/60 hover:border-purple-500/40 text-slate-200 flex flex-col justify-between gap-5 cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.12)] group relative overflow-hidden">
          
          {/* Subtle background glow card gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              {/* Icon container */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/60 group-hover:border-purple-500/20 group-hover:bg-slate-950/80 transition-all duration-300 flex items-center justify-center h-12 w-12">
                <Image 
                  src={item.icon} 
                  alt={item.name} 
                  width={28} 
                  height={28} 
                  className="object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              
              {/* Category Badge */}
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20 transition-all duration-300">
                {item.category}
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-lg text-slate-100 group-hover:text-purple-300 transition-colors duration-200">{item.name}</h2>
              <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed font-normal">{item.desc}</p>
            </div>
          </div>

          <div className="pt-2 flex items-center text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
            Use template
            <svg 
              className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
        </div>
      </Link>

      <UpgradeModal isOpen={isUpgradeModalOpen} onClose={() => setIsUpgradeModalOpen(false)} />
    </>
  );
}

export default TemplateCard;
