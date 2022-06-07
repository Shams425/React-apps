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
    width: 5,
    style: "solid",
    color: "#c4c4c4",
  },
  right: {
    width: 5,
    style: "solid",
    color: "#c4c4c4",
  },
  bottom: {
    width: 5,
    style: "solid",
    color: "#c4c4c4",
  },
  left: {
    width: 5,
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
          return { ...state, width: action.value };
        case "style":
          return { ...state, style: action.value };
        case "color":
          return { ...state, color: action.value };
        default:
          return state;
      }
    case "right":
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
    case "bottom":
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
    case "left":
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
}

export default function Border() {
  const [values, dispatch] = useReducer(reducer, initialValue);
  const [allValues, allDispatch] = useReducer(allReducer, initialAllValue);

  function copyHandler(ele) {
    navigator.clipboard.writeText(
      `border: ${values.width}px ${values.style} ${values.color}`
    );
    ele.textContent = "copied !!!";
    setTimeout(() => (ele.textContent = "click to copy"), 1500);
    console.log("it's working");
  }
  useEffect(() => {
    const viewBorder = document.querySelector(".showBorder .result");
    viewBorder.style.border = `${values.width}px ${values.style} ${values.color}`;
  }, [values]);

  function showType(event) {
    const tabs = document.querySelectorAll(".borderType .tab");
    const tabContent = document.querySelectorAll(".borderType .tabContent");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContent.forEach((content) => {
      content.classList.remove("show");
    });
    event.target.classList.add("active");
    document
      .querySelector(event.target.getAttribute("datatype"))
      .classList.add("show");
  }

  return (
    <div className="wrapper">
      <div className="borderContainer">
        <div className="showCodeContainer">
          <div className="showCode all">
            <code>
              border: {values.width}px {values.style} {values.color}
            </code>
            <ContentCopy
              className="copyIcon"
              titleAccess="copy"
              onClick={() =>
                navigator.clipboard.writeText(
                  `border: ${values.width}px ${values.style} ${values.color}`
                )
              }
            />
          </div>
          <div className="showCode each show">
            <code>
              border: {values.width}px {values.style} {values.color}
            </code>
            <ContentCopy
              className="copyIcon"
              titleAccess="copy"
              onClick={() =>
                navigator.clipboard.writeText(
                  `border: ${values.width} ${values.style} ${values.color}`
                )
              }
            />
          </div>
        </div>
        <div className="showBorder">
          <div className="result" onClick={(e) => copyHandler(e.target)}>
            click to copy
          </div>
        </div>
        <div className="borderType">
          <div className="choose d-flex mb-3">
            <p
              className="all tab active"
              datatype="#all"
              onClick={(e) => showType(e)}
            >
              All Borders
            </p>
            <p
              className="each tab mx-5"
              datatype="#each"
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
            <div className="col-lg-6 col-sm-12 px-3 mb-5 borderInput top">
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
            <div className="col-lg-6 col-sm-12 px-3 mb-5 borderInput right">
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
                  <span className="showResult">{allValues.right.width}px</span>
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
            <div className="col-lg-6 col-sm-12 px-3 mb-5 borderInput bottom">
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
                  <span className="showResult">{allValues.bottom.width}px</span>
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
            <div className="col-lg-6 col-sm-12 px-3 mb-5 borderInput left">
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
      </div>
    </div>
  );
}
