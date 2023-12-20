"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const data =[
    {
      name:"Mon",
      visit:2000,
      click:4005,
    },
    {
      name:"Tue",
      visit:2200,
      click:4840,
    },
    {
      name:"Wed",
      visit:2100,
      click:4470,
    },
    {
      name:"Thur",
      visit:2000,
      click:4900,
    },
    {
      name:"Fri",
      visit:2200,
      click:4600,
    },
    {
      name:"Sat",
      visit:2222,
      click:4544,
    },
    {
      name:"Sun",
      visit:2020,
      click:4050,
    }
  ]
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Reports</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c",border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart