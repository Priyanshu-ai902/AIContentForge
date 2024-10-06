"use client"

import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { use, useContext, useEffect } from 'react'

function UsageTrack() {

  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);



  useEffect(() => {
    user && GetData();
  }, [user])

  useEffect(() => {
    user && GetData();
  }, [updateCreditUsage && user])


  const GetData = async () => {
    {/* @ts-ignore */ }
    const result: History[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))

    GetTotalUsage(result);
  }

  const GetTotalUsage = (result: History[]) => {
    let total: number = 0;
    result.forEach(element => {
      {/* @ts-ignore */ }
      total = total + Number(element.aiResponse?.length)
    });
    setTotalUsage(total);
  }


  return (
    <div className='m-4'>

      <div className="bg-primary text-white p-3  rounded-lg">
        <h2 className='font-medium'>Credits</h2>
        <div className="h-2 bg-white w-full rounded-full mt-3">
          <div className="h-2 bg-blue-400 rounded-full"
            style={{
              width: (totalUsage / 10000) * 100 + "%"
            }}></div>

        </div>
        <h2 className='text-sm my-2'>{totalUsage}/10000 credit used</h2>
      </div>
      <Button className='w-full my-3'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack
