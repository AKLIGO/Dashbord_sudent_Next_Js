"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
    {
        name: 'Mon',
        presence: 40,
        absence: 60,
    },
    {
        name: 'Tues',
        presence: 70,
        absence: 30,
    },
    {
        name: 'Wed',
        presence: 98,
        absence: 20,
    },
    {
        name: 'Thusd',
        presence: 70,
        absence: 30,
    },
    {
        name: 'Fri',
        presence: 90,
        absence: 10,
    },
    {
        name: 'Sat',
        presence: 98,
        absence: 20,
    },

];
const AttendChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full flex flex-col'>
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt="moreDark" width={20} height={20} />
            </div>
            <div className='w-full h-[300px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        barSize={20}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }} />
                        <Bar dataKey="presence" fill="#FAE27C" legendType='circle' radius={[10, 10, 0, 0]} />
                        <Bar dataKey="absence" fill="#C3EBFA" legendType='circle' radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
export default AttendChart; 