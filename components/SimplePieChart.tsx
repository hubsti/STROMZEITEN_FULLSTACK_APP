import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";
import styles from "../styles/Home.module.css";
const data = [
  { name: "Group A", value: 60 },
  { name: "Group B", value: 40 },
];

const COLORS = ["#005C88", "#FFFFFF"];

const CustomLabel = ({ viewBox, noOfBubbleTeaSold = 0 }) => {
  const { cx, cy } = viewBox;
  return (
    <React.Fragment>
      <text x={cx+5} y={cy+12} className={styles.caption}>
        <tspan textAnchor="middle" fontSize="1.5rem" fill="#4D5E6D">{noOfBubbleTeaSold}% </tspan>
      </text>
      <text x={cx} y={cy} className={styles.caption}>
        <tspan y = "98%" textAnchor="middle" fontSize="0.9rem" fill="#4D5E6D" stroke="#4D5E6D">Renewables</tspan>
      </text>
    </React.Fragment>
  );
};

export default function SimplePieChart() {
  return (
    <>
      <ResponsiveContainer height="100%" min-width={300}>
        <PieChart margin={{ top: 0, right: 0, left: 1, bottom:10}}>
          <h2>Carbon intensity</h2>
          <Pie 
            data={data}
            innerRadius="60%"
            outerRadius="80%"
            fill="#005C88"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              content={ 
                <CustomLabel 
                
                  noOfBubbleTeaSold={data[0].value}
                  viewBox={undefined}
                />
              }
              position="center"

              /*value={data[0].value}
      position="center"
      fill="#005C88"
      style={{
        fontSize: "32px",
        fontWeight: "bold",
        fontFamily: "Roboto"
      }}*/
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
