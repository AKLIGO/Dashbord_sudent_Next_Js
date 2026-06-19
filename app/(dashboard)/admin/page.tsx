"use client"

import dynamic from "next/dynamic";
const AttendChart = dynamic(() => import("@/components/AttendChart"), { ssr: false });
const CountChart = dynamic(() => import("@/components/CountChart"), { ssr: false });
import UserCard from "@/components/UserCard";
import FinanceChart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";

const admin = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/*left side  */}
            <div className="w-full lg:w-2/3 flex flex-col">
                {/*User Card  */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="Staff" />

                </div>
                {/*MIDDLE CHARTS*/}

                <div className="flex gap-4 flex-col lg:flex-row my-4">
                    {/* STUDENT STATS */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>

                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendChart />
                    </div>

                </div>

                {/* BOTTOM CHARTS */}
                <div className="w-ful h-[500px]">
                    <FinanceChart />
                </div>


            </div>
            {/*right side  */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    )
}
export default admin;