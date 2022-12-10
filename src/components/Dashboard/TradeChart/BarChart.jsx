import React from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

//data
import { data } from './Data'

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width='99%' height='75%'>
      <BarChart width={150} height={40} data={data}>
        <CartesianGrid strokeDasharray='0' stroke='#e8e8e8' vertical={false} />
        <XAxis
          tickLine={false}
          axisLine={false}
          dataKey='name'
          stroke='#888888'
        />
        <YAxis tickLine={false} axisLine={false} stroke='#888888' />
        <Bar dataKey='uv' label={'uv'} barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
