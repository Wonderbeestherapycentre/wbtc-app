"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function SessionTrendChart({ data }: { data: any[] }) {
    if (!data || data.length === 0) {
        return <div className="h-[250px] flex items-center justify-center text-gray-400 text-sm">No data available</div>;
    }

    return (
        <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                    <XAxis
                        dataKey="name"
                        fontSize={12}
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                        stroke="#888888"
                    />
                    <YAxis
                        fontSize={12}
                        axisLine={false}
                        tickLine={false}
                        dx={-10}
                        stroke="#888888"
                        allowDecimals={false}
                    />
                    <Tooltip
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{
                            borderRadius: '8px',
                            border: 'none',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                            backgroundColor: 'white',
                            color: '#1f2937'
                        }}
                    />
                    <Bar
                        dataKey="sessions"
                        fill="#8b5cf6"
                        radius={[4, 4, 0, 0]}
                        barSize={30}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
