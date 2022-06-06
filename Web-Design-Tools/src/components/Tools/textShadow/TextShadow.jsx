import { ContentCopy } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./textshadow.css";

export default function TextShadow() {
  const [values, setValues] = useState({
    offsetX: 1,
    offsetY: 1,
    blur: 5,
    color: "#3895BC",
  });

  useEffect(() => {
    let result = document.querySelector(".showTextShadow .result");
    result.style.textShadow = `${values.offsetX}px ${values.offsetY}px ${values.blur}px ${values.color}`;
    result.addEventListener("click", () => {
      copyStyle();
      result.innerHTML = "copied !!!";

      setTimeout(() => {
        result.innerHTML = "Example";
      }, 1000);
    });
  }, [values]);

  const copyStyle = () => {
    navigator.clipboard.writeText(
      `text-shadow: ${values.offsetX}px ${values.offsetY}px ${values.blur}px ${values.color}`
    );
  };
  return (
    <div className="wrapper">
      <div className="showTextShadow">
        <div className="showCode">
          <code>
            text-shadow: {values.offsetX}px {values.offsetY}px {values.blur}px{" "}
            {values.color}
          </code>
          <ContentCopy
            className="copyIcon"
            titleAccess="copy"
            onClick={() =>
              navigator.clipboard.writeText(
                `text-shadow: ${values.offsetX}px ${values.offsetY}px ${values.blur}px ${values.color}`
              )
            }
          />
        </div>
        <div className="resultBox text-center mb-5" title="click to copy">
          <p className="result">Example</p>
        </div>

        <div className="shadow-input mb-5">
          <div className="offset-x mb-3">
            <label htmlFor="" className="form-label">
              Offset-X
            </label>
            <input
              type="range"
              name="offsetX"
              id=""
              min={0}
              max={30}
              value={values.offsetX}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <span className="showValue">{values.offsetX} px</span>
          </div>
          <div className="offset-y mb-3">
            <label htmlFor="" className="form-label">
              Offset-Y
            </label>
            <input
              type="range"
              name="offsetY"
              id=""
              min={0}
              max={30}
              value={values.offsetY}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <span className="showValue">{values.offsetY} px</span>
          </div>
          <div className="Blur mb-3">
            <label htmlFor="" className="form-label">
              Blur
            </label>
            <input
              type="range"
              name="blur"
              id=""
              min={0}
              max={30}
              value={values.blur}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <span className="showValue">{values.blur} px</span>
          </div>
          <div className="color mb-3">
            <label htmlFor="" className="form-label">
              Color
            </label>
            <input
              type="color"
              name="color"
              id=""
              value={values.color}
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
