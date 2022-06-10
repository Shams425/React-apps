import { ContentCopy, Percent } from "@mui/icons-material";
import React, { useEffect, useReducer, useState } from "react";
import "./borderRadius.css";

const initialAllValue = {
  topRight: {
    pixels: 0,
    percent: 0,
  },
  topLeft: {
    pixels: 0,
    percent: 0,
  },
  bottomRight: {
    pixels: 0,
    percent: 0,
  },
  bottomLeft: {
    pixels: 0,
    percent: 0,
  },
};

function reducer(state, action) {
  switch (action.name) {
    case "top-right":
      switch (action.type) {
        case "pixels":
          return {
            ...state,
            topRight: { ...state.topRight, pixels: action.value },
          };
        case "percent":
          return {
            ...state,
            topRight: { ...state.topRight, percent: action.value },
          };
        default:
          return state;
      }
    case "top-left":
      switch (action.type) {
        case "pixels":
          return {
            ...state,
            topLeft: { ...state.topLeft, pixels: action.value },
          };
        case "percent":
          return {
            ...state,
            topLeft: { ...state.topLeft, percent: action.value },
          };
        default:
          return state;
      }
    case "bottom-right":
      switch (action.type) {
        case "pixels":
          return {
            ...state,
            bottomRight: { ...state.bottomRight, pixels: action.value },
          };
        case "percent":
          return {
            ...state,
            bottomRight: { ...state.bottomRight, percent: action.value },
          };
        default:
          return state;
      }
    case "bottom-left":
      switch (action.type) {
        case "pixels":
          return {
            ...state,
            bottomLeft: { ...state.bottomLeft, pixels: action.value },
          };
        case "percent":
          return {
            ...state,
            bottomLeft: { ...state.bottomLeft, percent: action.value },
          };
        default:
          return state;
      }
  }
}

export default function BorderRadius() {
  const [radius, setRadius] = useState(0);
  const [radiusPercent, setRadiusPercent] = useState(0);
  const [Percent, setPercent] = useState(false);
  const [eachRadius, dispatch] = useReducer(reducer, initialAllValue);

  function copyHandler(ele) {
    navigator.clipboard.writeText(`border-radius: ${showValue()}`);
    ele.textContent = "copied !!!";
    setTimeout(() => (ele.textContent = "click to copy"), 1500);
  }
  function copyAllBordersHandler(ele) {
    navigator.clipboard.writeText(
      `border-topLeft: ${showEachValue("topLeft")};
       border-top-right-radius: ${showEachValue("topRight")};
       border-bottomRight: ${showEachValue("bottomRight")};
       border-bottomLeft: ${showEachValue("bottomLeft")};`
    );
    ele.textContent = "copied !!!";
    setTimeout(() => (ele.textContent = "click to copy"), 1500);
  }

  function showValue() {
    return Percent ? `${radiusPercent}%` : `${radius}px`;
  }

  function showEachValue(radiusName) {
    switch (radiusName) {
      case "topRight":
        return !Percent
          ? `${eachRadius.topRight.pixels}px`
          : `${eachRadius.topRight.percent}%`;
      case "topLeft":
        return !Percent
          ? `${eachRadius.topLeft.pixels}px`
          : `${eachRadius.topLeft.percent}%`;
      case "bottomRight":
        return !Percent
          ? `${eachRadius.bottomRight.pixels}px`
          : `${eachRadius.bottomRight.percent}%`;
      case "bottomLeft":
        return !Percent
          ? `${eachRadius.bottomLeft.pixels}px`
          : `${eachRadius.bottomLeft.percent}%`;
      default:
        return { ...eachRadius };
    }
  }

  useEffect(() => {
    const viewBorder = document.querySelector(".showBorder .result");
    viewBorder.style.borderRadius = showValue();

    const viewEachBorder = document.querySelector(
      ".showBorder .eachBorderResult"
    );

    console.log(window.getComputedStyle(viewEachBorder).borderTopLeftRadius);
    viewEachBorder.style.borderTopLeftRadius = `${showEachValue("topLeft")}`;
    viewEachBorder.style.borderTopRightRadius = `${showEachValue("topRight")}`;
    viewEachBorder.style.borderBottomRightRadius = `${showEachValue(
      "bottomRight"
    )}`;
    viewEachBorder.style.borderBottomLeftRadius = `${showEachValue(
      "bottomLeft"
    )}`;
  }, [radius, radiusPercent, eachRadius]);

  function showType(event) {
    const tabs = document.querySelectorAll(".borderType .tab");
    const tabContent = document.querySelectorAll(".borderType .tabContent");
    const codeContainer = document.querySelectorAll(".showCode");
    const viewBorder = document.querySelectorAll(".showResult");

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContent.forEach((content) => {
      content.classList.remove("show");
    });
    codeContainer.forEach((code) => {
      code.classList.remove("show");
    });
    viewBorder.forEach((border) => {
      border.classList.remove("show");
    });

    event.target.classList.add("active");

    document
      .querySelector(event.target.getAttribute("datatype"))
      .classList.add("show");

    document
      .querySelector(event.target.getAttribute("data-target"))
      .classList.add("show");

    document
      .querySelector(event.target.getAttribute("data-show-code"))
      .classList.add("show");
  }

  return (
    <div className="wrapper">
      <div className="container borderRadiusContainer">
        <div className="row mt-5">
          <div className="borderType col-lg-6">
            <h2 className="mb-3">Border Radius Params</h2>
            <div className="choose d-flex mb-3">
              <p
                className="all tab active"
                datatype="#all"
                data-target="#allResult"
                data-show-code="#allCode"
                onClick={(e) => showType(e)}
              >
                All Borders
              </p>
              <p
                className="each tab"
                datatype="#each"
                data-target="#eachResult"
                data-show-code="#eachCode"
                onClick={(e) => showType(e)}
              >
                Each Border
              </p>
            </div>
            <div className="all tabContent show" id="all">
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
            <div className="each tabContent" id="each">
              <div className="col-lg-6 col-md-6 col-sm-12 borderInput top-left">
                <div className="details">
                  <h2>Top-Left border</h2>
                  <div className="pixels">
                    <label htmlFor="range" style={{ marginRight: "12px" }}>
                      pixels:
                    </label>
                    <input
                      type="range"
                      name="pixels"
                      min={1}
                      max={40}
                      value={eachRadius.topLeft.pixels}
                      onChange={(e) => {
                        dispatch({
                          name: "top-left",
                          type: "pixels",
                          value: e.target.value,
                        });
                        setPercent(false);
                      }}
                    />
                    <span className="showResult">
                      {eachRadius.topLeft.pixels}px
                    </span>
                  </div>
                  <div className="percent">
                    <label htmlFor="range">percent:</label>
                    <input
                      type="range"
                      name="percent"
                      min={1}
                      max={50}
                      value={eachRadius.topLeft.percent}
                      onChange={(e) => {
                        dispatch({
                          name: "top-left",
                          type: "percent",
                          value: e.target.value,
                        });
                        setPercent(true);
                      }}
                    />
                    <span className="showResult">
                      {eachRadius.topLeft.percent}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 borderInput top-right">
                <div className="details">
                  <h2>Top-Right border</h2>
                  <div className="pixels">
                    <label htmlFor="range" style={{ marginRight: "12px" }}>
                      pixels:
                    </label>
                    <input
                      type="range"
                      name="pixels"
                      min={1}
                      max={40}
                      value={eachRadius.topRight.pixels}
                      onChange={(e) => {
                        dispatch({
                          name: "top-right",
                          type: "pixels",
                          value: e.target.value,
                        });
                        setPercent(false);
                      }}
                    />
                    <span className="showResult">
                      {eachRadius.topRight.pixels}px
                    </span>
                  </div>
                  <div className="percent">
                    <label htmlFor="range">percent:</label>
                    <input
                      type="range"
                      name="percent"
                      min={1}
                      max={50}
                      value={eachRadius.topRight.percent}
                      onChange={(e) => {
                        dispatch({
                          name: "top-right",
                          type: "percent",
                          value: e.target.value,
                        });

                        setPercent(true);
                      }}
                    />
                    <span className="showResult">
                      {eachRadius.topRight.percent}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 borderInput bottom-right">
                <div className="details">
                  <h2>bottom-Right border</h2>
                  <div className="pixels">
                    <label htmlFor="range" style={{ marginRight: "12px" }}>
                      pixels:
                    </label>
                    <input
                      type="range"
                      name="pixels"
                      min={1}
                      max={40}
                      value={eachRadius.bottomRight.pixels}
                      onChange={(e) => {
                        dispatch({
                          name: "bottom-right",
                          type: "pixels",
                          value: e.target.value,
                        });
                        setPercent(false);
                      }}
                    />
                    <span className="showResult">
                      {eachRadius.bottomRight.pixels}px
                    </span>
                  </div>
                  <div className="percent">
                    <label htmlFor="range">percent:</label>
                    <input
                      type="range"
                      name="percent"
                      min={1}
                      max={50}
                      value={eachRadius.bottomRight.percent}
                      onChange={(e) => {
                        dispatch({
                          name: "bottom-right",
                          type: "percent",
                          value: e.target.value,
                        });

                        setPercent(true);
                      }}
                    />
                    <span className="showResult">
                      {eachRadius.bottomRight.percent}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 borderInput bottom-left">
                <div className="details">
                  <h2>Bottom-left border</h2>
                  <div className="pixels">
                    <label htmlFor="range" style={{ marginRight: "12px" }}>
                      pixels:
                    </label>
                    <input
                      type="range"
                      name="pixels"
                      min={1}
                      max={40}
                      value={eachRadius.bottomLeft.pixels}
                      onChange={(e) => {
                        dispatch({
                          name: "bottom-left",
                          type: "pixels",
                          value: e.target.value,
                        });
                        setPercent(false);
                      }}
                    />
                    <span className="showResult">
                      {eachRadius.bottomLeft.pixels}px
                    </span>
                  </div>
                  <div className="percent">
                    <label htmlFor="range">percent:</label>
                    <input
                      type="range"
                      name="percent"
                      min={1}
                      max={50}
                      value={eachRadius.bottomLeft.percent}
                      onChange={(e) => {
                        dispatch({
                          name: "bottom-left",
                          type: "percent",
                          value: e.target.value,
                        });

                        setPercent(true);
                      }}
                    />
                    <span className="showResult">
                      {eachRadius.bottomLeft.percent}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="preview col-lg-6 px-5">
            <h2 className="mb-3">Code</h2>
            <div className="showCodeContainer">
              <div className="showCode all show" id="allCode">
                <code>border-radius: {showValue()}</code>
                <ContentCopy
                  className="copyIcon"
                  titleAccess="copy"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `border-radius: ${showValue()}`
                    )
                  }
                />
              </div>
              <div className="showCode each" id="eachCode">
                <code>
                  border-top-left-radius: {showEachValue("topLeft")}; <br />
                  border-top-right-radius: {showEachValue("topRight")}; <br />
                  border-bottom-right: {showEachValue("bottomRight")}; <br />
                  border-bottom-left: {showEachValue("bottomLeft")}; <br />
                </code>
                <ContentCopy
                  className="copyIcon"
                  titleAccess="copy"
                  onClick={(e) => copyAllBordersHandler(e)}
                />
              </div>
            </div>
            <div className="livePreview">
              <h2 className="mb-3">Live Preview</h2>
              <div className="showBorder">
                <div
                  className="showResult result show"
                  id="allResult"
                  onClick={(e) => copyHandler(e.target)}
                >
                  click to copy
                </div>
                <div
                  className="showResult eachBorderResult"
                  id="eachResult"
                  onClick={(e) => copyAllBordersHandler(e.target)}
                >
                  click to copy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
