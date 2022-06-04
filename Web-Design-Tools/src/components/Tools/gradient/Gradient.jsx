import React, { useEffect, useState } from "react";
import "./gradient.css";
import {
  ArrowBack,
  ArrowForward,
  ArrowUpward,
  ArrowDownward,
} from "@mui/icons-material";

export default function Gradient() {
  const [values, setValues] = useState({
    dir: "left",
    color1: "#356ed5",
    color1Percent: 20,
    color2: "#00ffad",
    color2Percent: 80,
  });

  const copyHandler = (e) => {
    const gradientBox = document.querySelector(".gradientBox");
    navigator.clipboard.writeText(
      `background: linear-gradient(to ${values.dir}, ${values.color1} ${values.color1Percent}%, ${values.color2} ${values.color2Percent}%);`
    );
    console.log(gradientBox);
  };

  const activeHandler = (e) => {
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
  };

  useEffect(() => {
    const gradientBox = document.querySelector(".gradientBox");
    gradientBox.style.backgroundImage = `linear-gradient(to ${values.dir}, ${values.color1} ${values.color1Percent}%, ${values.color2} ${values.color2Percent}%)`;
  }, [values]);

  return (
    <div className="wrapper">
      <div className="showGradient">
        <div className="gradientResult mb-5">
          <button className="gradientBox" onClick={copyHandler}></button>
        </div>
        <div className="gradientInput">
          <div className="gradientDirection">
            <h2>Gradient Direction</h2>
            <div className="arrows">
              <button
                className="arrowIcon"
                name="dir"
                value="top"
                onClick={activeHandler}
              >
                <ArrowUpward />
              </button>
              <button
                className="arrowIcon"
                name="dir"
                value="right"
                onClick={activeHandler}
              >
                <ArrowForward name="dir" value="right" />
              </button>
              <button
                className="arrowIcon"
                name="dir"
                value="bottom"
                onClick={activeHandler}
              >
                <ArrowDownward />
              </button>
              <button
                className="arrowIcon"
                name="dir"
                value="left"
                onClick={activeHandler}
              >
                <ArrowBack />
              </button>
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
                      setValues({ ...values, [e.target.name]: e.target.value })
                    }
                  />
                </div>
                <div className="showValue">
                  <input
                    type="range"
                    name="color1Percent"
                    min={0}
                    max={100}
                    change="color2Percent"
                    value={values.color1Percent}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value,
                        [e.target.getAttribute("change")]: 100 - e.target.value,
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
                      setValues({ ...values, [e.target.name]: e.target.value });
                    }}
                  />
                </div>
                <div className="showValue">
                  <input
                    type="range"
                    name="color2Percent"
                    min={0}
                    max={100}
                    change="color1Percent"
                    value={values.color2Percent}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        [e.target.name]: e.target.value,
                        [e.target.getAttribute("change")]: 100 - e.target.value,
                      })
                    }
                  />
                  <span className="showPercent">{values.color2Percent}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
