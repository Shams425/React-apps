import { ContentCopy } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./boxshadow.css";
import BoxExamples from "./examples/BoxExamples";

export default function BoxShadow() {
  const [values, setValues] = useState({
    offsetX: 0,
    offsetY: 5,
    blur: 15,
    spread: 0,
    color: "#00000059",
  });

  useEffect(() => {
    let result = document.querySelector(".result");
    result.style.boxShadow = `${values.offsetX}px ${values.offsetY}px ${values.blur}px ${values.spread}px ${values.color}`;
    result.addEventListener("click", () => {
      copyStyle();
      result.innerHTML = "copied !!!";

      setTimeout(() => {
        result.innerHTML = "click to copy";
      }, 1000);
    });
  }, [values]);

  const copyStyle = () => {
    navigator.clipboard.writeText(
      `box-shadow: ${values.offsetX}px ${values.offsetY}px ${values.blur}px ${values.spread}px ${values.color}`
    );
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row mt-5">
          <div className="shadow-input col-lg-6 mb-5">
            <h2 className="mb-3">Shadow params</h2>
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
              <label htmlFor="" className="form-label offsetY">
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
              <label htmlFor="" className="form-label blur">
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
            <div className="Spread mb-3">
              <label htmlFor="" className="form-label spread">
                Spread
              </label>
              <input
                type="range"
                name="spread"
                id=""
                min={0}
                max={30}
                value={values.spread}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
              <span className="showValue">{values.spread} px</span>
            </div>
            <div className="color mb-3">
              <label htmlFor="" className="form-label">
                Color
              </label>
              <div className="showColor">
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
          <div className="preview col-lg-6">
            <h2 className="mb-3">Code</h2>
            <div className="showCode">
              <code>
                box-shadow: {values.offsetX}px {values.offsetY}px {values.blur}
                px
                {values.spread}px {values.color}
              </code>
              <ContentCopy
                className="copyIcon"
                titleAccess="copy"
                onClick={() =>
                  navigator.clipboard.writeText(
                    `box-shadow: ${values.offsetX}px ${values.offsetY}px ${values.blur}px ${values.spread}px ${values.color}`
                  )
                }
              />
            </div>
            <div className="livePreview">
              <h2 className="mb-3">Live preview</h2>
              <div className="show-shadow">
                <div className="result" title="click to copy">
                  <span>click to copy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BoxExamples />
    </div>
  );
}
