import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  LineChart,
  Line,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import { format } from "date-fns";
type DataProps = {
  value: number;
  timestamp: string;
  country: string;
  metainfo: {
    unit: string;
    type: string;
  };
}[];

const EleChart = ({ EleData }: { EleData: DataProps }) => {

  const formtdate= format(new Date(EleData[22].timestamp), "eeee, do MMMM yyyy 'at' HH:mm")
  console.log(formtdate)
  return (
    <>
      <ResponsiveContainer  width="100%"  height="100%">
        <AreaChart
          width={100}
          height={150}
          data={EleData}
          margin={{ top: 0, right: 0, left: 0, bottom: 15 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#005C88" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#005C88" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="timestamp"
            angle={45}
            tickFormatter={(timestamp) => format(new Date(timestamp), "HH:mm")}
            dy={15}
            dx={25}
            tick={{ fontSize: 10 }}
          >


                      </XAxis>
          <YAxis tickCount={5} label={{ value: 'g / kWh', angle: -90, position: 'insideLeft' , fontSize: 15, dx: 10, dy: 30}}  />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip wrapperStyle={{ outline: "none" }} content={<CustomTooltip payload={EleData} />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#005C88"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default EleChart;
