"use client"

import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
    {
        name: 'Total',
        count: 110,
        fill: 'white',
    },
    {
        name: 'Boys',
        count: 50,
        fill: '#FAE27C',
    },
    {
        name: 'Girl',
        count: 60,
        fill: '#C3EBFA',
    },
];

// #endregion
const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};


const CountChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/*Title*/}
            <div className='flex justify-between items-center'>
                <h1 className="text-xl font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>
            {/*CHART*/}
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer width="100%" height={300}>
                    <RadialBarChart
                        cx="50%" cy="50%" innerRadius="40%" outerRadius="100%"
                        barSize={32} data={data}
                        startAngle={90} endAngle={-270}>
                        <RadialBar

                            // label={{
                            //     position: "insideStart",
                            //     fill: "#fff"
                            // }}
                            background

                            dataKey="count"

                        />
                        {/* <Legend layout="vertical" verticalAlign="middle" /> */}
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/malefemale.png" alt="chart" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' loading="eager" />
            </div>
            {/*NOTTOM */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaSky rounded-full' />
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
                </div>

                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaYellow rounded-full' />
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Girl (45%)</h2>
                </div>
            </div>
            {/**/}
            <div className=''></div>
        </div>
    )
}
export default CountChart;