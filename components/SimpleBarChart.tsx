import React, { PureComponent } from "react";
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
  Label,
} from "recharts";

const data = [
  {
    name: "Nuclear",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Geothermal",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Biomass",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Coal",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Solar",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Wind",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Oil",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Hydro",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Gas",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const COLORS = ['#B8BF4E', '#FAF85F', '#2C8172', '#B99C5E', '#7ED0C0', '#F5894A', '#2F88B8', '#C8526E', '#98907F '];

export default function SimpleBarChart() {
    return (
      <>
      <ResponsiveContainer width="100%"  height="100%" min-width={300}>
        <BarChart
         barCategoryGap={0}
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 0, left: 1, bottom: 20}}
        >
          
          <XAxis type="number" tick={{ fontSize: 15 }}label={{ value: 'GW', position: 'insideBottom' , fontSize: 15, dx: 0, dy: 10}} />
          
          <YAxis type="category" dataKey="name" fontSize="0.5rem" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip wrapperStyle={{ outline: "none" }} />
          <Bar dataKey="pv" fill="#8884d8" >
          {
          	data.map((entry, index) => {
            	const color =  COLORS[index];
            	// eslint-disable-next-line react/jsx-key
            	return <Cell fill={color} />;
            })
          }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      </>
    );
  }

