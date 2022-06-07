import { ContentCopy, Percent } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./borderRadius.css";

export default function BorderRadius() {
  const [radius, setRadius] = useState(0);
  const [radiusPercent, setRadiusPercent] = useState(0);
  const [Percent, setPercent] = useState(false);

  function copyHandler(ele) {
    navigator.clipboard.writeText(`border-radius: ${showValue()}`);
    ele.textContent = "copied !!!";
    setTimeout(() => (ele.textContent = "click to copy"), 1500);
  }

  function showValue() {
    return Percent ? `${radiusPercent}%` : `${radius}px`;
  }

  useEffect(() => {
    const viewBorder = document.querySelector(".showBorder .result");
    viewBorder.style.borderRadius = showValue();
  }, [radius, radiusPercent]);

  return (
    <div className="wrapper">
      <div className="borderRadiusContainer">
        <div className="showCode">
          <code>border-radius: {showValue()}</code>
          <ContentCopy
            className="copyIcon"
            titleAccess="copy"
            onClick={() =>
              navigator.clipboard.writeText(`border-radius: ${showValue()}`)
            }
          />
        </div>
        <div className="showBorder">
          <div className="result show" onClick={(e) => copyHandler(e.target)}>
            click to copy
          </div>
        </div>
        <div className="borderInput">
          <div className="pixels">
            <label htmlFor="range" style={{ marginRight: "12px" }}>
              pixels:
            </label>
            <input
              type="range"
              name="pixels"
              min={1}
              max={40}
              value={radius}
              onChange={(e) => {
                setRadius(e.target.value);
                setPercent(false);
              }}
            />
            <span className="showResult">{radius}px</span>
          </div>
          <div className="percent">
            <label htmlFor="range">percent:</label>
            <input
              type="range"
              name="percent"
              min={1}
              max={50}
              value={radiusPercent}
              onChange={(e) => {
                setRadiusPercent(e.target.value);
                setPercent(true);
              }}
            />
            <span className="showResult">{radiusPercent}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
