'use client'

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../utils/db';
import { AIOutput } from '../../../../utils/schema';
import { eq, gte, lt  } from 'drizzle-orm';  // Import additional date filters
import { Loader2Icon } from 'lucide-react';


interface History {
  aiResponse?: string;
  createdBy: string;
  createdAt:string;
}

const MAX_CREDITS = 10000;  



function UsageTrack() {
  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useState<number>(0);  // State to store the total usage
  const [progressWidth, setProgressWidth] = useState<number>(0);  // State to store progress bar width
  const [loading, setLoading] = useState<boolean>(true);  // State to show loading state

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const getData = async () => {
    setLoading(true);  // Start loading
    try {
      // Get the current date in YYYY-MM-DD format
      const today = new Date();
      // Set the start of the day (00:00:00) and the end of the day (23:59:59)
      const startOfDay = new Date(today.setHours(0, 0, 0, 0));  // Start of today
      const endOfDay = new Date(today.setHours(23, 59, 59, 999));  // End of today

      const result = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
        .where(gte(AIOutput.createdAt, startOfDay.toISOString()))  // Start of today
        .where(lt(AIOutput.createdAt, endOfDay.toISOString()));  // End of today

      console.log(result); 
      const usage = getTotalUsage(result);  // Calculate the total usage for today
      setTotalUsage(usage);
      setProgressWidth((usage / MAX_CREDITS) * 100);  // Calculate progress bar width
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  const getTotalUsage = (result: History[]): number => {
    let totalUsage = 0;
    result.forEach((e) => {
      if (e.aiResponse) {
        totalUsage += Number(e.aiResponse.length);  // Accumulate usage
      }
    });
    return totalUsage;
  };

  // Format usage for better readability
  const formatUsage = (usage: number): string => {
    return usage.toLocaleString();  // Formats the number with commas
  };

  // Determine progress bar color based on usage
  const getProgressBarColor = () => {
    if (progressWidth >= 100) return 'bg-red-500';  // Over limit
    if (progressWidth >= 75) return 'bg-yellow-500';  // Close to limit
    return 'bg-[#9981f9]';  // Normal state
  };

  return (
    <div className='m-5 mt-6'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>

        {/* Progress bar */}
        <div className='h-2 bg-gray-300 w-full rounded-full mt-3'>
          <div
            className={`rounded-full h-2 ${getProgressBarColor()}`}
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>

        {/* Total usage display */}
        <h2 className='text-sm my-2'>
          {formatUsage(totalUsage)}/{MAX_CREDITS.toLocaleString()} Credit Used
        </h2>

        {/* Loading state */}
        {loading && <Loader2Icon className='animate-spin'/>}
      </div>

      {/* Upgrade button */}
      <div>
        <Button variant={'secondary'} className='w-full my-3'>
          Upgrade
        </Button>
      </div>
    </div>
  );
}

export default UsageTrack;
