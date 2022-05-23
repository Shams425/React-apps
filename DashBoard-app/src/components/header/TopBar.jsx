import React from "react";
import "./topBar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Board</span>
        </div>
        <div className="topRight">
          <div className="iconContainer">
            <NotificationsNone />
            <span className="iconBadge">3</span>
          </div>
          <div className="iconContainer">
            <Language />
            <span className="iconBadge">3</span>
          </div>
          <div className="iconContainer">
            <Settings />
          </div>
          <div className="profilePic"></div>
        </div>
      </div>
    </div>
  );
}
