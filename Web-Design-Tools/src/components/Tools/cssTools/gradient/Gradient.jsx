import React, { useEffect, useState } from "react";
import "./gradient.css";
import {
  ArrowBack,
  ArrowForward,
  ArrowUpward,
  ArrowDownward,
  ContentCopy,
} from "@mui/icons-material";

export default function Gradient() {
  const [values, setValues] = useState({
    dir: "to top",
    color1: "#356ed5",
    color1Percent: 20,
    color2: "#00ffad",
    color2Percent: 80,
    angle: 0,
  });

  function copyHandler(e) {
    const gradientBox = document.querySelector(".gradientBox");
    navigator.clipboard.writeText(
      `background: linear-gradient(${values.dir}, ${values.color1} ${values.color1Percent}%, ${values.color2} ${values.color2Percent}%);`
    );
    console.log(gradientBox);
  }

  function activeHandler(e) {
    //set arrows active className
    const arrowIcons = document.querySelectorAll(".arrowIcon");
    arrowIcons.forEach((icon) => {
      icon.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.nodeName.toLowerCase() === "button") {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.nodeName.toLowerCase() === "svg") {
      setValues({
        ...values,
        [e.target.parentElement.name]: e.target.parentElement.value,
      });
    } else if (e.target.nodeName.toLowerCase() === "path") {
      setValues({
        ...values,
        [e.target.parentElement.parentElement.name]:
          e.target.parentElement.parentElement.value,
      });
    }
  }

  useEffect(() => {
    const gradientBox = document.querySelector(".gradientBox");
    gradientBox.style.backgroundImage = `linear-gradient(${values.dir}, ${values.color1} ${values.color1Percent}%, ${values.color2} ${values.color2Percent}%)`;
  }, [values]);

  return (
    <div className="wrapper">
      <div className="container showGradient">
        <div className="row mt-5">
          <div className="gradientInput col-lg-6">
            <div className="gradientDirection">
              <h2 className="mb-3">Gradient Direction</h2>
              <div className="arrows mb-3">
                <button
                  className="arrowIcon active"
                  name="dir"
                  value="to top"
                  onClick={activeHandler}
                >
                  <ArrowUpward />
                </button>
                <button
                  className="arrowIcon rotate"
                  name="dir"
                  value="45deg"
                  onClick={activeHandler}
                >
                  <ArrowUpward />
                </button>
                <button
                  className="arrowIcon"
                  name="dir"
                  value="to right"
                  onClick={activeHandler}
                >
                  <ArrowForward name="dir" value="right" />
                </button>
                <button
                  className="arrowIcon rotate"
                  name="dir"
                  value="135deg"
                  onClick={activeHandler}
                >
                  <ArrowForward name="dir" value="right" />
                </button>
                <button
                  className="arrowIcon"
                  name="dir"
                  value="to bottom"
                  onClick={activeHandler}
                >
                  <ArrowDownward />
                </button>
                <button
                  className="arrowIcon rotate"
                  name="dir"
                  value="225deg"
                  onClick={activeHandler}
                >
                  <ArrowDownward />
                </button>
                <button
                  className="arrowIcon"
                  name="dir"
                  value="to left"
                  onClick={activeHandler}
                >
                  <ArrowBack />
                </button>
                <button
                  className="arrowIcon rotate"
                  name="dir"
                  value="315deg"
                  onClick={activeHandler}
                >
                  <ArrowBack />
                </button>
              </div>
            </div>
            <div className="angle">
              <h2>Gradient angle: </h2>
              <div className="showAngle">
                <div className="showAngleDeg">
                  <span className="deg"></span>
                  <span className="degArrow"></span>
                </div>
                <div className="showValue">
                  <input
                    type="range"
                    name="angle"
                    value={values.angle}
                    min={0}
                    max={360}
                    id=""
                    data-change="dir"
                    onChange={(e) => {
                      document.querySelector(
                        ".deg"
                      ).style.transform = `rotate(${e.target.value}deg)`;
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value,
                        [e.target.getAttribute(
                          "data-change"
                        )]: `${e.target.value}deg`,
                      });
                    }}
                  />
                  <span className="showPercent">{values.angle}deg</span>
                </div>
              </div>
            </div>
            <div className="colors mt-5">
              <div className="color1">
                <div className="info">
                  <label htmlFor="color">Color 1</label>
                  <input
                    type="color"
                    name="color1"
                    value={values.color1}
                    id=""
                    onChange={(e) =>
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="showValue">
                  <input
                    type="range"
                    name="color1Percent"
                    min={0}
                    max={100}
                    data-change="color2Percent"
                    value={values.color1Percent}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value,
                        [e.target.getAttribute("data-change")]:
                          100 - e.target.value,
                      })
                    }
                  />
                  <span className="showPercent">{values.color1Percent}%</span>
                </div>
              </div>
              <div className="color2">
                <div className="info">
                  <label htmlFor="color">Color 2</label>
                  <input
                    type="color"
                    name="color2"
                    id=""
                    value={values.color2}
                    onChange={(e) => {
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="showValue">
                  <input
                    type="range"
                    name="color2Percent"
                    min={0}
                    max={100}
                    data-change="color1Percent"
                    value={values.color2Percent}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value,
                        [e.target.getAttribute("data-change")]:
                          100 - e.target.value,
                      })
                    }
                  />
                  <span className="showPercent">{values.color2Percent}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="preview col-lg-6">
            <h2 className="mb-3">Code</h2>
            <div className="showCode">
              <code>
                background: liner-gradient({values.dir}, {values.color1}{" "}
                {values.color1Percent}%,
                {values.color2} {values.color2Percent}%);
              </code>
              <ContentCopy
                className="copyIcon"
                titleAccess="copy"
                onClick={() =>
                  navigator.clipboard
                    .writeText(`background: liner-gradient(${values.dir}, ${values.color1}
            ${values.color1Percent}%,
            ${values.color2} ${values.color2Percent}%);`)
                }
              />
            </div>
            <div className="showGradientResult mb-5">
              <h2 className="mb-3">Live Preview</h2>
              <div className="gradientResult">
                <button className="gradientBox" onClick={copyHandler}></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
