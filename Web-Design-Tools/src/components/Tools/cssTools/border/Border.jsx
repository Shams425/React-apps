import { ContentCopy } from "@mui/icons-material";
import React, { useReducer, useEffect } from "react";
import "./border.css";

const initialValue = {
  width: 1,
  style: "solid",
  color: "#c4c4c4",
};

const initialAllValue = {
  top: {
    width: 1,
    style: "solid",
    color: "#c4c4c4",
  },
  right: {
    width: 1,
    style: "solid",
    color: "#c4c4c4",
  },
  bottom: {
    width: 1,
    style: "solid",
    color: "#c4c4c4",
  },
  left: {
    width: 1,
    style: "solid",
    color: "#c4c4c4",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "width":
      return { ...state, width: action.value };
    case "style":
      return { ...state, style: action.value };
    case "color":
      return { ...state, color: action.value };
    default:
      return state;
  }
}

function allReducer(state, action) {
  switch (action.name) {
    case "top":
      switch (action.type) {
        case "width":
          return { ...state, top: { ...state.top, width: action.value } };
        case "style":
          return { ...state, top: { ...state.top, style: action.value } };
        case "color":
          return { ...state, top: { ...state.top, color: action.value } };
        default:
          return state;
      }
    case "right":
      switch (action.type) {
        case "width":
          return {
            ...state,
            right: { ...state.right, width: action.value },
          };
        case "style":
          return {
            ...state,
            right: { ...state.right, style: action.value },
          };
        case "color":
          return {
            ...state,
            right: { ...state.right, color: action.value },
          };
        default:
          return state;
      }
    case "bottom":
      switch (action.type) {
        case "width":
          return {
            ...state,
            bottom: { ...state.bottom, width: action.value },
          };
        case "style":
          return {
            ...state,
            bottom: { ...state.bottom, style: action.value },
          };
        case "color":
          return {
            ...state,
            bottom: { ...state.bottom, color: action.value },
          };
        default:
          return state;
      }
    case "left":
      switch (action.type) {
        case "width":
          return {
            ...state,
            left: { ...state.left, width: action.value },
          };
        case "style":
          return {
            ...state,
            left: { ...state.left, style: action.value },
          };
        case "color":
          return {
            ...state,
            left: { ...state.left, color: action.value },
          };
        default:
          return state;
      }
  }
}

export default function Border() {
  const [values, dispatch] = useReducer(reducer, initialValue);
  const [allValues, allDispatch] = useReducer(allReducer, initialAllValue);

  useEffect(() => {
    const viewBorder = document.querySelector(".showBorder .result");
    viewBorder.style.border = `${values.width}px ${values.style} ${values.color}`;

    const viewEachBorder = document.querySelector(
      ".showBorder .eachBorderResult"
    );

    viewEachBorder.style.borderTop = `${allValues.top.width}px ${allValues.top.style} ${allValues.top.color}`;
    viewEachBorder.style.borderRight = `${allValues.right.width}px ${allValues.right.style} ${allValues.right.color}`;
    viewEachBorder.style.borderBottom = `${allValues.bottom.width}px ${allValues.bottom.style} ${allValues.bottom.color}`;
    viewEachBorder.style.borderLeft = `${allValues.left.width}px ${allValues.left.style} ${allValues.left.color}`;
  }, [values, allValues]);

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
      <div className="container borderContainer">
        <div className="row mt-5">
          <div className="borderType col-lg-6">
            <h2 className="mb-3">Border Params</h2>
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
                <div className="width">
                  <label htmlFor="range">Width: </label>
                  <input
                    type="range"
                    name="width"
                    min={1}
                    max={40}
                    value={values.width}
                    onChange={(e) =>
                      dispatch({ type: "width", value: e.target.value })
                    }
                  />
                  <span className="showResult">{values.width}px</span>
                </div>
                <div className="style">
                  <label htmlFor="range">style: </label>
                  <select
                    name="style"
                    id=""
                    className="form-control"
                    onChange={(e) =>
                      dispatch({ type: "style", value: e.target.value })
                    }
                  >
                    <option value="solid" defaultValue>
                      solid
                    </option>
                    <option value="dashed">dashed</option>
                    <option value="double">double</option>
                    <option value="groove">groove</option>
                    <option value="hidden">hidden</option>
                    <option value="inset">inset</option>
                    <option value="none">none</option>
                    <option value="outset">outset</option>
                    <option value="ridge">ridge</option>
                  </select>
                </div>
                <div className="color">
                  <label htmlFor="range">color: </label>

                  <input
                    type="color"
                    name="width"
                    value={values.color}
                    onChange={(e) =>
                      dispatch({ type: "color", value: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="each tabContent" id="each">
              <div className="col-lg-6 col-md-6 col-sm-12 borderInput top">
                <div className="details">
                  <h2>Top border</h2>
                  <div className="width">
                    <label htmlFor="range">Width: </label>
                    <input
                      type="range"
                      name="width"
                      min={1}
                      max={40}
                      value={allValues.top.width}
                      onChange={(e) =>
                        allDispatch({
                          type: "width",
                          value: e.target.value,
                          name: "top",
                        })
                      }
                    />
                    <span className="showResult">{allValues.top.width}px</span>
                  </div>
                  <div className="style">
                    <label htmlFor="range">style: </label>
                    <select
                      name="style"
                      id=""
                      className="form-control"
                      onChange={(e) =>
                        allDispatch({
                          type: "style",
                          value: e.target.value,
                          name: "top",
                        })
                      }
                    >
                      <option value="solid" defaultValue>
                        solid
                      </option>
                      <option value="dashed">dashed</option>
                      <option value="double">double</option>
                      <option value="groove">groove</option>
                      <option value="hidden">hidden</option>
                      <option value="inset">inset</option>
                      <option value="none">none</option>
                      <option value="outset">outset</option>
                      <option value="ridge">ridge</option>
                    </select>
                  </div>
                  <div className="color">
                    <label htmlFor="range">color: </label>

                    <input
                      type="color"
                      name="width"
                      value={allValues.top.color}
                      onChange={(e) =>
                        allDispatch({
                          type: "color",
                          value: e.target.value,
                          name: "top",
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 borderInput right">
                <div className="details">
                  <h2>Right border</h2>
                  <div className="width">
                    <label htmlFor="range">Width: </label>
                    <input
                      type="range"
                      name="width"
                      min={1}
                      max={40}
                      value={allValues.right.width}
                      onChange={(e) =>
                        allDispatch({
                          type: "width",
                          value: e.target.value,
                          name: "right",
                        })
                      }
                    />
                    <span className="showResult">
                      {allValues.right.width}px
                    </span>
                  </div>
                  <div className="style">
                    <label htmlFor="range">style: </label>
                    <select
                      name="style"
                      id=""
                      className="form-control"
                      onChange={(e) =>
                        allDispatch({
                          type: "style",
                          value: e.target.value,
                          name: "right",
                        })
                      }
                    >
                      <option value="solid" defaultValue>
                        solid
                      </option>
                      <option value="dashed">dashed</option>
                      <option value="double">double</option>
                      <option value="groove">groove</option>
                      <option value="hidden">hidden</option>
                      <option value="inset">inset</option>
                      <option value="none">none</option>
                      <option value="outset">outset</option>
                      <option value="ridge">ridge</option>
                    </select>
                  </div>
                  <div className="color">
                    <label htmlFor="range">color: </label>

                    <input
                      type="color"
                      name="width"
                      value={allValues.right.color}
                      onChange={(e) =>
                        allDispatch({
                          type: "color",
                          value: e.target.value,
                          name: "right",
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 borderInput bottom">
                <div className="details">
                  <h2>Bottom border</h2>

                  <div className="width">
                    <label htmlFor="range">Width: </label>
                    <input
                      type="range"
                      name="width"
                      min={1}
                      max={40}
                      value={allValues.bottom.width}
                      onChange={(e) =>
                        allDispatch({
                          type: "width",
                          value: e.target.value,
                          name: "bottom",
                        })
                      }
                    />
                    <span className="showResult">
                      {allValues.bottom.width}px
                    </span>
                  </div>
                  <div className="style">
                    <label htmlFor="range">style: </label>
                    <select
                      name="style"
                      id=""
                      className="form-control"
                      onChange={(e) =>
                        allDispatch({
                          type: "style",
                          value: e.target.value,
                          name: "bottom",
                        })
                      }
                    >
                      <option value="solid" defaultValue>
                        solid
                      </option>
                      <option value="dashed">dashed</option>
                      <option value="double">double</option>
                      <option value="groove">groove</option>
                      <option value="hidden">hidden</option>
                      <option value="inset">inset</option>
                      <option value="none">none</option>
                      <option value="outset">outset</option>
                      <option value="ridge">ridge</option>
                    </select>
                  </div>
                  <div className="color">
                    <label htmlFor="range">color: </label>

                    <input
                      type="color"
                      name="width"
                      value={allValues.bottom.color}
                      onChange={(e) =>
                        allDispatch({
                          type: "color",
                          value: e.target.value,
                          name: "bottom",
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 borderInput left">
                <div className="details">
                  <h2>left border</h2>
                  <div className="width">
                    <label htmlFor="range">Width: </label>
                    <input
                      type="range"
                      name="width"
                      min={1}
                      max={40}
                      value={allValues.left.width}
                      onChange={(e) =>
                        allDispatch({
                          type: "width",
                          value: e.target.value,
                          name: "left",
                        })
                      }
                    />
                    <span className="showResult">{allValues.left.width}px</span>
                  </div>
                  <div className="style">
                    <label htmlFor="range">style: </label>
                    <select
                      name="style"
                      id=""
                      className="form-control"
                      onChange={(e) =>
                        allDispatch({
                          type: "style",
                          value: e.target.value,
                          name: "left",
                        })
                      }
                    >
                      <option value="solid" defaultValue>
                        solid
                      </option>
                      <option value="dashed">dashed</option>
                      <option value="double">double</option>
                      <option value="groove">groove</option>
                      <option value="hidden">hidden</option>
                      <option value="inset">inset</option>
                      <option value="none">none</option>
                      <option value="outset">outset</option>
                      <option value="ridge">ridge</option>
                    </select>
                  </div>
                  <div className="color">
                    <label htmlFor="range">color: </label>

                    <input
                      type="color"
                      name="width"
                      value={allValues.left.color}
                      onChange={(e) =>
                        allDispatch({
                          type: "color",
                          value: e.target.value,
                          name: "left",
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="preview col-lg-6 px-5">
            <div className="showCodeContainer">
              <h2 className="mb-3">Code</h2>
              <div className="showCode all show" id="allCode">
                <code className="allBorders">
                  border: {values.width}px {values.style} {values.color}
                </code>
                <ContentCopy
                  className="copyIcon"
                  titleAccess="copy"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      document.querySelector("code.allBorders").textContent
                    )
                  }
                />
              </div>
              <div className="showCode each" id="eachCode">
                <code className="eachBorder">
                  border-top: {allValues.top.width}px {allValues.top.style}{" "}
                  {allValues.top.color} <br />
                  border-right: {allValues.right.width}px{" "}
                  {allValues.right.style} {allValues.right.color} <br />
                  border-bottom: {allValues.bottom.width}px{" "}
                  {allValues.bottom.style} {allValues.bottom.color} <br />
                  border-left: {allValues.left.width}px {allValues.left.style}{" "}
                  {allValues.left.color} <br />
                </code>
                <ContentCopy
                  className="copyIcon"
                  titleAccess="copy"
                  onClick={(e) =>
                    navigator.clipboard.writeText(
                      document.querySelector("code.eachBorder").textContent
                    )
                  }
                />
              </div>
            </div>
            <div className="livePreview">
              <h2 className="mb-3">Live Preview</h2>
              <div className="showBorder">
                <div
                  className="showResult result show"
                  id="allResult"
                  onClick={(e) => {
                    e.target.textContent = "copied !!!";
                    setTimeout(
                      () => (e.target.textContent = "click to copy"),
                      1500
                    );
                    navigator.clipboard.writeText(
                      document.querySelector("code.allBorders").textContent
                    );
                  }}
                >
                  click to copy
                </div>
                <div
                  className="showResult eachBorderResult"
                  id="eachResult"
                  onClick={(e) => {
                    e.target.textContent = "copied !!!";
                    setTimeout(
                      () => (e.target.textContent = "click to copy"),
                      1500
                    );
                    navigator.clipboard.writeText(
                      document.querySelector("code.eachBorder").textContent
                    );
                  }}
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
