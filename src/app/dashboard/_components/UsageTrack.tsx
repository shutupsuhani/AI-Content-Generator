'use client';

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../utils/db';
import { AIOutput } from '../../../../utils/schema';
import { eq, and, gte } from 'drizzle-orm';

interface History {
  aiResponse?: string | null;
  createdBy: string;
  createdAt: Date; // Assuming your AIOutput schema has a createdAt timestamp
}

const MAX_CREDITS = 10000;

function UsageTrack() {
  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [progressWidth, setProgressWidth] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      getDataForToday();
    }
  }, [user]);

  const getStartOfToday = (): Date => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  };

  const getDataForToday = async () => {
    setLoading(true);
    try {
      const emailAddress = user?.primaryEmailAddress?.emailAddress;

      if (!emailAddress) {
        console.warn('No email address found for the user.');
        return;
      }

      const startOfToday = getStartOfToday();

      const result: History[] = await db
        .select()
        .from(AIOutput)
        .where(
          and(
            eq(AIOutput.createdBy, emailAddress),
            gte(AIOutput.createdAt, startOfToday)
          )
        );

      const usage = getTotalUsage(result);
      setTotalUsage(usage);
      setProgressWidth((usage / MAX_CREDITS) * 100);
    } catch (error) {
      console.error('Error fetching data for today:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTotalUsage = (result: History[]): number => {
    let totalUsage = 0;
    result.forEach((e) => {
      if (e.aiResponse) {
        totalUsage += Number(e.aiResponse.length);
      }
    });
    return totalUsage;
  };

  const formatUsage = (usage: number): string => {
    return usage.toLocaleString();
  };

  const getProgressBarColor = () => {
    if (progressWidth >= 100) return 'bg-red-500';
    if (progressWidth >= 75) return 'bg-yellow-500';
    return 'bg-[#9981f9]';
  };

  return (
    <div className="m-5 mt-6">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits (Today)</h2>
        <div className="h-2 bg-gray-300 w-full rounded-full mt-3">
          <div
            className={`rounded-full h-2 ${getProgressBarColor()}`}
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
        <h2 className="text-sm my-2">
          {formatUsage(totalUsage)}/{MAX_CREDITS.toLocaleString()} Credit Used Today
        </h2>
        {loading && <p>Loading today's usage data...</p>}
      </div>
      <div>
        <Button variant={'secondary'} className="w-full my-3">
          Upgrade
        </Button>
      </div>
    </div>
  );
}

export default UsageTrack;