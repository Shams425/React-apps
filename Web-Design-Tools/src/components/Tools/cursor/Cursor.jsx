import { CopyAll } from "@mui/icons-material";
import { width } from "@mui/system";
import React, { useCallback, useEffect, useMemo, useState } from "react";
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
        <CopyAll className="copyIcon" titleAccess="copy" />
      </div>
      <div className="cursorContainer">
        {[...Array(22)].map((_, index) => (
          <div className={`cursor eg${index + 1}`} onClick={copyHandler}></div>
        ))}
      </div>
    </div>
  );
}
