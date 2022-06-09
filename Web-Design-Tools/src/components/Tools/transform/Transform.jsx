import React, { useEffect, useReducer } from "react";
import { ContentCopy } from "@mui/icons-material";
import "./transform.css";

const initialValues = {
  rotate: {
    deg: 0,
  },
  rotate3D: {
    deg: 0,
    xAxis: true,
    yAxis: false,
    zAxis: false,
  },
  scale: {
    scaleValue: 1,
  },
  scale3D: {
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
  },
  skew: {
    skewX: 0,
    skewY: 0,
  },
  translate: {
    translateX: 0,
    translateY: 0,
  },
};

function reducer(state, action) {
  switch (action.name) {
    case "rotate":
      return { ...state, rotate: { ...state.rotate, deg: action.value } };
    case "rotate3D":
      switch (action.type) {
        case "deg":
          return {
            ...state,
            rotate3D: { ...state.rotate3D, deg: action.value },
          };
        case "xAxis":
          return {
            ...state,
            rotate3D: { ...state.rotate3D, xAxis: action.value },
          };
        case "yAxis":
          return {
            ...state,
            rotate3D: { ...state.rotate3D, yAxis: action.value },
          };
        case "zAxis":
          return {
            ...state,
            rotate3D: { ...state.rotate3D, zAxis: action.value },
          };
        default:
          return state;
      }
    case "skew":
      switch (action.type) {
        case "skewX":
          return { ...state, skew: { ...state.skew, skewX: action.value } };
        case "skewY":
          return { ...state, skew: { ...state.skew, skewY: action.value } };
        default:
          return state;
      }
    case "scale":
      return { ...state, scale: { ...state.scale, scaleValue: action.value } };
    case "scale3D":
      switch (action.type) {
        case "scaleX":
          return {
            ...state,
            scale3D: { ...state.scale3D, scaleX: action.value },
          };
        case "scaleY":
          return {
            ...state,
            scale3D: { ...state.scale3D, scaleY: action.value },
          };
        case "scaleZ":
          return {
            ...state,
            scale3D: { ...state.scale3D, scaleZ: action.value },
          };
        default:
          return state;
      }
    case "translate":
      switch (action.type) {
        case "translateX":
          return {
            ...state,
            translate: { ...state.translate, translateX: action.value },
          };
        case "translateY":
          return {
            ...state,
            translate: { ...state.translate, translateY: action.value },
          };
        default:
          return state;
      }
    default:
      return state;
  }
}

export default function Transform() {
  const [allValues, dispatch] = useReducer(reducer, initialValues);

  useEffect(() => {
    const resultBox = document.querySelectorAll(".displayResult");
    const selectValue = document.querySelector(".transOptions").value;

    switch (selectValue) {
      case "rotate":
        resultBox[0].style.transform = `rotate(${allValues.rotate.deg}deg)`;
        break;
      case "rotate-3d":
        resultBox[1].style.transform = `rotate3d(${
          allValues.rotate3D.xAxis ? 1 : 0
        }, ${allValues.rotate3D.yAxis ? 1 : 0}, ${
          allValues.rotate3D.zAxis ? 1 : 0
        }, ${allValues.rotate3D.deg}deg)`;
        break;
      case "scale":
        resultBox[2].style.transform = `scale(${allValues.scale.scaleValue})`;
        break;
      case "scale-3d":
        resultBox[3].style.transform = `scale3d(${allValues.scale3D.scaleX},${allValues.scale3D.scaleY},${allValues.scale3D.scaleZ})`;
        break;
      case "skew":
        resultBox[4].style.transform = `skew(${allValues.skew.skewX}deg,${allValues.skew.skewY}deg)`;
        break;
      case "translate":
        resultBox[5].style.transform = `translate(${allValues.translate.translateX}px, ${allValues.translate.translateY}px)`;
        break;
      default:
        return;
    }
    showCode();
  }, [allValues]);

  function showInputs(event) {
    const allInputs = document.querySelectorAll(".inputs");
    const allResults = document.querySelectorAll(".results .result");

    allInputs.forEach((input) => input.classList.remove("show"));
    allResults.forEach((result) => result.classList.remove("show"));

    document
      .querySelectorAll(`.${event.target.value}`)
      .forEach((ele) => ele.classList.add("show"));
  }

  function showCode() {
    const selectCodeValue = document.querySelector(".transOptions").value;
    const showCode = document.querySelector("code");

    switch (selectCodeValue) {
      case "rotate":
        return (showCode.textContent = `transform: rotate(${allValues.rotate.deg}deg)`);
      case "rotate-3d":
        return (showCode.textContent = `transform: rotate3d(${
          allValues.rotate3D.xAxis ? 1 : 0
        }, ${allValues.rotate3D.yAxis ? 1 : 0}, ${
          allValues.rotate3D.zAxis ? 1 : 0
        }, ${allValues.rotate3D.deg}deg)`);
      case "scale":
        return (showCode.textContent = `transform: scale(${allValues.scale.scaleValue})`);
      case "scale-3d":
        return (showCode.textContent = `transform: scale3d(${allValues.scale3D.scaleX},${allValues.scale3D.scaleY},${allValues.scale3D.scaleZ})`);
      case "skew":
        return (showCode.textContent = `transform: skew(${allValues.skew.skewX}deg,${allValues.skew.skewY}deg)`);
      case "translate":
        return (showCode.textContent = `transform: translate(${allValues.translate.translateX}px, ${allValues.translate.translateY}px)`);
      default:
        return;
    }
  }

  return (
    <div className="wrapper">
      <div className="transformContainer">
        <div className="showCode">
          <code></code>
          <ContentCopy
            className="copyIcon"
            titleAccess="copy"
            onClick={() =>
              navigator.clipboard.writeText(
                document.querySelector("code").textContent
              )
            }
          />
        </div>

        <div className="showTransform">
          <div className="results">
            <div className="result rotate show">
              <div className="displayResult">click to copy</div>
            </div>
            <div className="result rotate-3d">
              <div className="displayResult">
                click to copy
                <span className="bounder"></span>
                <span className="bounder"></span>
                <span className="bounder"></span>
                <span className="bounder"></span>
                <span className="bounder"></span>
              </div>
            </div>
            <div className="result scale">
              <div className="displayResult">click to copy</div>
            </div>
            <div className="result scale-3d">
              <div className="displayResult">
                click to copy
                <span className="bounder"></span>
                <span className="bounder"></span>
                <span className="bounder"></span>
                <span className="bounder"></span>
                <span className="bounder"></span>
              </div>
            </div>
            <div className="result skew">
              <div className="displayResult">click to copy</div>
            </div>
            <div className="result translate">
              <div className="displayResult">click to copy</div>
            </div>
          </div>
        </div>

        <div className="transformInput">
          <div className="userSelect">
            <h3>Transform Type:</h3>
            <select
              name="transformValues"
              className="transOptions form-control"
              id=""
              onChange={(e) => {
                showCode();
                showInputs(e);
              }}
            >
              <option value="rotate" defaultValue>
                rotate
              </option>
              <option value="rotate-3d">rotate-3d</option>
              <option value="scale">scale</option>
              <option value="scale-3d">scale-3d</option>
              <option value="skew">skew</option>
              <option value="translate">translate</option>
            </select>
          </div>
          <div className="showUserInput">
            <div className="inputs rotate show">
              <div className="rotate">
                <label htmlFor="range">Rotate</label>
                <div className="showValue d-flex align-items-center">
                  <input
                    type="range"
                    name="rotate"
                    id=""
                    min={0}
                    max={360}
                    value={allValues.rotate.deg}
                    onChange={(e) =>
                      dispatch({
                        name: "rotate",
                        type: "deg",
                        value: e.target.value,
                      })
                    }
                  />
                  <span className="value">{allValues.rotate.deg} deg</span>
                </div>
              </div>
            </div>
            <div className="inputs rotate-3d">
              <div className="rotate">
                <label htmlFor="range">Rotate</label>
                <div className="showValue d-flex align-items-center">
                  <input
                    type="range"
                    name="rotate"
                    id=""
                    min={0}
                    max={360}
                    value={allValues.rotate3D.deg}
                    onChange={(e) =>
                      dispatch({
                        name: "rotate3D",
                        type: "deg",
                        value: e.target.value,
                      })
                    }
                  />
                  <span className="value">{allValues.rotate3D.deg} deg</span>
                </div>
              </div>
              <div className="rotateX d-flex">
                <label htmlFor="range">X-axis</label>
                <div className="showValue d-flex align-items-center">
                  <input
                    type="checkbox"
                    name="xAxis"
                    id=""
                    defaultChecked
                    onChange={(e) =>
                      dispatch({
                        name: "rotate3D",
                        type: "xAxis",
                        value: e.target.checked,
                      })
                    }
                  />
                </div>
              </div>
              <div className="rotateY d-flex">
                <label htmlFor="range">Y-axis</label>
                <div className="showValue d-flex align-items-center">
                  <input
                    type="checkbox"
                    name="xAxis"
                    id=""
                    onChange={(e) =>
                      dispatch({
                        name: "rotate3D",
                        type: "yAxis",
                        value: e.target.checked,
                      })
                    }
                  />
                </div>
              </div>
              <div className="rotateZ d-flex">
                <label htmlFor="range">Z-axis</label>
                <div className="showValue d-flex align-items-center">
                  <input
                    type="checkbox"
                    name="xAxis"
                    id=""
                    onChange={(e) =>
                      dispatch({
                        name: "rotate3D",
                        type: "zAxis",
                        value: e.target.checked,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="inputs scale">
              <div className="scale d-flex align-items-center">
                <label htmlFor="range">scale</label>
                <div className="showValue d-flex align-items-center">
                  <input
                    type="range"
                    name="xAxis"
                    min={-3.5}
                    max={3.5}
                    step={0.1}
                    value={allValues.scale.scaleValue}
                    id=""
                    onChange={(e) =>
                      dispatch({
                        name: "scale",
                        type: "scale",
                        value: e.target.value,
                      })
                    }
                  />
                  <span className="value">{allValues.scale.scaleValue}</span>
                </div>
              </div>
            </div>
            <div className="inputs scale-3d">
              <div className="scaleX d-flex align-items-center">
                <label htmlFor="range">scale-x</label>
                <div className="showValue d-flex align-items-center">
                  <input
                    type="range"
                    name="xAxis"
                    min={-3.5}
                    max={3.5}
                    step={0.1}
                    value={allValues.scale3D.scaleX}
                    id=""
                    onChange={(e) =>
                      dispatch({
                        name: "scale3D",
                        type: "scaleX",
                        value: e.target.value,
                      })
                    }
                  />
                  <span className="value">{allValues.scale3D.scaleX}</span>
                </div>
              </div>
              <div className="scaleY d-flex align-items-center">
                <label htmlFor="range">scale-y</label>
                <div className="showValue d-flex align-items-center">
                  <input
                    type="range"
                    name="xAxis"
                    min={-3.5}
                    max={3.5}
                    step={0.1}
                    value={allValues.scale3D.scaleY}
                    id=""
                    onChange={(e) =>
                      dispatch({
                        name: "scale3D",
                        type: "scaleY",
                        value: e.target.value,
                      })
                    }
                  />
                  <span className="value">{allValues.scale3D.scaleY}</span>
                </div>
              </div>
              <div className="scaleZ d-flex align-items-center">
                <label htmlFor="range">scale-Z</label>
                <div className="showValue d-flex align-items-center">
                  <input
                    type="range"
                    name="xAxis"
                    min={-3.5}
                    max={3.5}
                    step={0.1}
                    value={allValues.scale3D.scaleZ}
                    id=""
                    onChange={(e) =>
                      dispatch({
                        name: "scale3D",
                        type: "scaleZ",
                        value: e.target.value,
                      })
                    }
                  />
                  <span className="value">{allValues.scale3D.scaleZ}</span>
                </div>
              </div>
            </div>
            <div className="inputs skew">
              <div className="skewX d-flex align-items-center">
                <label htmlFor="range">skew-x</label>
                <div className="showValue d-flex align-items-center">
                  <input
                    type="range"
                    name="xAxis"
                    min={0}
                    max={360}
                    value={allValues.skew.skewX}
                    id=""
                    onChange={(e) =>
                      dispatch({
                        name: "skew",
                        type: "skewX",
                        value: e.target.value,
                      })
                    }
                  />
                  <span className="value">{allValues.skew.skewX}</span>
                </div>
              </div>
              <div className="skewY d-flex align-items-center">
                <label htmlFor="range">skew-y</label>
                <div className="showValue d-flex align-items-center">
                  <input
                    type="range"
                    name="yAxis"
                    min={0}
                    max={360}
                    value={allValues.skew.skewY}
                    id=""
                    onChange={(e) =>
                      dispatch({
                        name: "skew",
                        type: "skewY",
                        value: e.target.value,
                      })
                    }
                  />
                  <span className="value">{allValues.skew.skewY}</span>
                </div>
              </div>
            </div>
            <div className="inputs translate">
              <div className="translateX d-flex align-items-center">
                <label htmlFor="range">translate-x</label>
                <div
                  className="showValue d-flex align-items-center"
                  style={{ flex: "1" }}
                >
                  <input
                    type="range"
                    name="xAxis"
                    min={-360}
                    max={360}
                    value={allValues.translate.translateX}
                    id=""
                    onChange={(e) =>
                      dispatch({
                        name: "translate",
                        type: "translateX",
                        value: e.target.value,
                      })
                    }
                    style={{ width: "80%" }}
                  />
                  <span className="value">
                    {allValues.translate.translateX} px
                  </span>
                </div>
              </div>
              <div className="translateY d-flex align-items-center">
                <label htmlFor="range">translate-y</label>
                <div
                  className="showValue d-flex align-items-center"
                  style={{ flex: "1" }}
                >
                  <input
                    type="range"
                    name="yAxis"
                    min={-360}
                    max={360}
                    value={allValues.translate.translateY}
                    id=""
                    onChange={(e) =>
                      dispatch({
                        name: "translate",
                        type: "translateY",
                        value: e.target.value,
                      })
                    }
                    style={{ width: "80%" }}
                  />
                  <span className="value">
                    {allValues.translate.translateY} px
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
