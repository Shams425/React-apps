import React, { useState } from "react";
import { ChromePicker } from "react-color";
import "./color.css";

export default function Color() {
  const [color, setColor] = useState("fff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          console.log(showColorPicker);
          !showColorPicker
            ? setShowColorPicker(true)
            : setShowColorPicker(false);
        }}
      >
        {showColorPicker ? "hidePicker" : "showPicker"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(e) => setColor(e.hex)}
          className="mt-3"
        />
      )}
      <h3 className="text-center">{color}</h3>
    </div>
  );
}
