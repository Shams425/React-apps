import React from "react";
import "./widgetsSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetsSm() {
  return (
    <div className="widgetSmall">
      <h3 className="widgetSmTitle">New Join Members</h3>
      <ul className="widteSmList">
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src={require("../../../../assets/img/profile.jpg")}
            alt=""
          />
          <div className="WidgetSmUser">
            <span className="widgetUsername">Anna</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src={require("../../../../assets/img/profile-2.jpg")}
            alt=""
          />
          <div className="WidgetSmUser">
            <span className="widgetUsername">Anna</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src={require("../../../../assets/img/profile-3.jpg")}
            alt=""
          />
          <div className="WidgetSmUser">
            <span className="widgetUsername"></span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src={require("../../../../assets/img/profile-4.jpg")}
            alt=""
          />
          <div className="WidgetSmUser">
            <span className="widgetUsername"></span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src={require("../../../../assets/img/profile-5.jpg")}
            alt=""
          />
          <div className="WidgetSmUser">
            <span className="widgetUsername"></span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            display
          </button>
        </li>
      </ul>
    </div>
  );
}
