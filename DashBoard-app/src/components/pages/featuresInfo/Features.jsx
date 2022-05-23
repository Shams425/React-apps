import React from "react";
import "./features.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function Features() {
  return (
    <div className="featureWrapper">
      <div className="featuredItem">
        <span className="featureTitle">Revanue</span>
        <div className="moneyContainer">
          <span className="featuredMoney">$2,145</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featureTitle">Sales</span>
        <div className="moneyContainer">
          <span className="featuredMoney">$2,145</span>
          <span className="featuredMoneyRate">
            14.4 <ArrowUpward className="featureIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featureTitle">Cost</span>
        <div className="moneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            1.4 <ArrowUpward className="featureIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
