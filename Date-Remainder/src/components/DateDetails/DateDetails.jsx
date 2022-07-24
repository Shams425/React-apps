import { Info, Close, Edit } from "@mui/icons-material";
import React from "react";
import { allUsersData } from "../shared/datesData";
import "./datesDetails.css";
export default function DateDetails({
  data,
  index,
  rerender,
  navToUpdate,
  navToInfo,
}) {
  function moveToAdd() {
    navToUpdate(index);
  }

  function showInfo() {
    navToInfo();
  }

  return (
    <div className="dateDetailsContainer">
      <div className="profileImg">
        <img src={require("../../components/assets/img/profile.jpg")} alt="" />
      </div>
      <div className="dateInfo">
        <p className="personName">You have date with {data.name}</p>
        <p className="dateTime">At {data.time}</p>
      </div>
      <div className="dateBehavior">
        <button type="button" className="btn" onClick={showInfo}>
          <Info className="infoIcon" />
        </button>

        <button className="btn" onClick={moveToAdd}>
          <Edit />
        </button>

        <button
          className="btn"
          onClick={() => {
            allUsersData.splice(index, 1);
            rerender([...allUsersData]);
          }}
        >
          <Close />
        </button>
      </div>
    </div>
  );
}
