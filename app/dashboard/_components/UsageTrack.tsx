"use client";

import React, { useEffect, useContext } from 'react';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext);

  const maxCredits = 13000;
  const usagePercentage = Math.min(Math.round((Number(totalUsage) / maxCredits) * 100), 100);

  useEffect(() => {
    if (user) GetData();
  }, [user]);

  useEffect(() => {
    if (user && updateCreditUsage) GetData();
  }, [updateCreditUsage, user]);

  const GetData = async () => {
    const userEmail = user?.primaryEmailAddress?.emailAddress;
    if (!userEmail) return;
    
    try {
      const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, userEmail));
      GetTotalUsage(result);
    } catch (error) {
      console.error("Error fetching credit data:", error);
    }
  };

  const GetTotalUsage = (result: any[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total += Number(element.aiResponse?.length || 0);
    });
    setTotalUsage(total);
  };

  return (
    <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800/80 rounded-2xl p-4 shadow-xl relative overflow-hidden group">
      {/* Background soft glow */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl transition-all duration-500 group-hover:bg-purple-500/20" />
      
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 bg-purple-500/20 rounded-lg border border-purple-500/30">
          <Zap className="h-4 w-4 text-purple-400 fill-purple-400" />
        </div>
        <h2 className="font-semibold text-[14px] text-slate-200">Credits Usage</h2>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-400">Total consumption</span>
          <span className="font-medium text-purple-400">{usagePercentage}%</span>
        </div>
        
        {/* Animated Progress Bar */}
        <div className="h-2 bg-slate-950 w-full rounded-full overflow-hidden border border-slate-800/50">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${usagePercentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        
        <div className="flex justify-between items-center pt-1 text-[11px] text-slate-400">
          <span>{Number(totalUsage).toLocaleString()} used</span>
          <span>{maxCredits.toLocaleString()} limit</span>
        </div>
      </div>

      <Link href={'/dashboard/billing'} className="block mt-4">
        <Button className='w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-xs py-2 rounded-xl transition-all duration-300 shadow-[0_0_12px_rgba(139,92,246,0.2)] hover:shadow-[0_0_18px_rgba(139,92,246,0.45)] border-0 h-9'>
          Upgrade Plan
        </Button>
      </Link>
    </div>
  );
}

export default UsageTrack;
