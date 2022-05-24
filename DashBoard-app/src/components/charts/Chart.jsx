import React from "react";
import "./chart.css";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="Chart">
      <h3 className="chartTitle">{title}</h3>
      {/* aspect means 4 unit for width 1 unit for height (if width 400 height 100) */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data} className="chartAnalytics">
          <XAxis dataKey="name" stroke="#213f66"></XAxis>
          <YAxis stroke="#213f66"></YAxis>
          <Line type="monotone" dataKey={dataKey} stroke="#213f66"></Line>
          <Tooltip></Tooltip> {/** to show info when hover over points */}
          {grid && <CartesianGrid stroke="#5555554d"></CartesianGrid>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
