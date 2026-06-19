"use client"
import Image from "next/image";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// #region Sample data
const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,

    },
    {
        name: 'Feb',
        income: 3000,
        expense: 1398,

    },
    {
        name: 'Mar',
        income: 2000,
        expense: 9800,
    },
    {
        name: 'Apr',
        income: 2780,
        expense: 3908,
    },
    {
        name: 'May',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'June',
        income: 2390,
        expense: 3800,
    },
    {
        name: 'July',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Aug',
        income: 3490,
        expense: 4300,

    },
    {
        name: 'Sep',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Oct',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Nov',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Dec',
        income: 3490,
        expense: 4300,
    },



];

const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/*Title*/}
            <div className='flex justify-between items-center'>
                <h1 className="text-xl font-semibold">Finance</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>

            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
                    <XAxis dataKey="name"
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                        tickMargin={10}
                    // stroke="var(--color-text-3)" 
                    />
                    <YAxis stroke="var(--color-text-3)" />
                    <Tooltip
                        cursor={{
                            stroke: 'var(--color-border-2)',
                        }}
                        contentStyle={{
                            backgroundColor: 'var(--color-surface-raised)',
                            borderColor: 'var(--color-border-2)',
                        }}
                    />
                    <Legend

                        align="center"
                        verticalAlign="top"
                        wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
                    />
                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#C3EBFA"
                        dot={{
                            fill: 'var(--color-surface-base)',
                        }}
                        activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="expense"
                        stroke="#CFE2FE"
                        dot={{
                            fill: 'var(--color-surface-base)',
                        }}
                        activeDot={{ stroke: 'var(--color-surface-base)' }}
                    />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default FinanceChart;