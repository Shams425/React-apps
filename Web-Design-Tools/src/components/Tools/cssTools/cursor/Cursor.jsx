import { ContentCopy } from "@mui/icons-material";
import React, { useState } from "react";
import "./cursor.css";

export default function Cursor() {
  const [cursor, setCursor] = useState("pointer");

  function copyHandler(e) {
    navigator.clipboard.writeText(
      `cursor: ${window.getComputedStyle(e.target).cursor}`
    );

    setCursor(`${window.getComputedStyle(e.target).cursor}`);
  }

  return (
    <div className="wrapper">
      <div className="showCode">
        <code>cursor: {cursor}</code>
        <ContentCopy
          className="copyIcon"
          titleAccess="copy"
          onClick={() => navigator.clipboard.writeText(`cursor: ${cursor}`)}
        />
      </div>
      <div className="showCursors">
        <h2 className="mb-3">Cursors Types</h2>
        <div className="cursorContainer">
          {[...Array(22)].map((_, index) => (
            <div
              className={`cursor eg${index + 1}`}
              onClick={copyHandler}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
