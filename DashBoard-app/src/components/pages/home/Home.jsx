import React from "react";
import { UserData } from "../../../Shared/dummyData";
import Chart from "../../charts/Chart";
import Features from "../featuresInfo/Features";
import "./home.css";
import WidgetsLarge from "./WidgetsLarge/WidgetsLarge";
import WidgetsSm from "./WidgetsSmall/WidgetsSm";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart data={UserData} title="User Analytics" grid dataKey="ActiveUser" />
      <div className="howWidgets">
        <WidgetsSm />
        <WidgetsLarge />
      </div>
    </div>
  );
}
