import { ContentCopy } from "@mui/icons-material";
import React, { useReducer, useEffect } from "react";
import "./border.css";

const initialValue = {
  width: 1,
  style: "solid",
  color: "#000",
};

function reducer(state, action) {
  switch (action.type) {
    case "width":
      return { ...state, width: action.value };
    case "style":
      return { ...state, style: action.value };
    case "color":
      return { ...state, color: action.value };
  }
}

export default function Border() {
  const [values, dispatch] = useReducer(reducer, initialValue);

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

  return (
    <div className="wrapper">
      <div className="borderContainer">
        <div className="showCode">
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
        <div className="showBorder">
          <div className="result" onClick={(e) => copyHandler(e.target)}>
            click to copy
          </div>
        </div>
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
              onChange={(e) =>
                dispatch({ type: "color", value: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
