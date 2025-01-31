"use client";

import React, { useState, useEffect, useContext } from 'react';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);

  useEffect(() => {
    if (user) GetData();
  }, [user]);

  useEffect(() => {
    if (user && updateCreditUsage) GetData();
  }, [updateCreditUsage, user]);

  const GetData = async () => {
    {/* @ts-ignore */ }
    const result: History[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
    GetTotalUsage(result);
  };

  const GetTotalUsage = (result: History[]) => {
    let total: number = 0;
    result.forEach((element) => {
      {/* @ts-ignore */ }
      total += Number(element.aiResponse?.length);
    });
    setTotalUsage(total);
  };

  const handleTemplateClick = () => {
    if (totalUsage >= 13000) {
      alert('Please upgrade your plan to continue using this feature.');
    }
  };

  return (
    <div className="m-4">
      <div className="text-white p-3 rounded-lg">
        <h2 className="font-semibold text-lg">Credits</h2>
        <div className="h-2 bg-white w-full rounded-full mt-3">
          <div
            className="h-2 bg-blue-500 rounded-full"
            style={{
              width: (totalUsage / 13000) * 100 + '%',
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/13000 credit used</h2>
      </div>
      <Link href={'/dashboard/billing'}>
        <Button className='w-full my-3 bg-slate-900 hover:bg-slate-900 text-lg'>Upgrade</Button>
      </Link>
    </div>
  );
}

export default UsageTrack;
