import React, { useState } from "react";
import { ChromePicker } from "react-color";
import "./color.css";

export default function Color() {
  const [color, setColor] = useState("fff");
  return (
    <div className="wrapper">
      <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
    </div>
  );
}
