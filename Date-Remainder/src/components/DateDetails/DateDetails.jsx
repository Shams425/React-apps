import React from "react";
import "./datesDetails.css";

export default function DateDetails() {
  return (
    <div className="dateDetailsContainer">
      <div className="profileImg">
        <img src={require("../../components/assets/img/profile.jpg")} alt="" />
      </div>
      <div className="dateInfo">
        <p className="personName">You have date with Ahmed</p>
        <p className="dateTime">Today at 4pm</p>
      </div>
    </div>
  );
}
