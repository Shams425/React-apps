import { Info, Close, Edit } from "@mui/icons-material";
import React from "react";
import { allUsersData } from "../shared/datesData";
import "./datesDetails.css";
export default function DateDetails({ data, index, rerender, navigator }) {
  function showInfo() {
    document.querySelector(".trigger").click();
  }

  function moveToAdd() {
    navigator(index);
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

      {/* modal for showing more information about dates */}

      {/* modal trigger */}
      <button
        type="button"
        className="btn trigger"
        data-bs-toggle="modal"
        data-bs-target="#modelId"
        style={{ display: "none" }}
      ></button>
      <div
        className="modal fade"
        id="modelId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Your Date with {allUsersData[index].name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h3 className="meetingTitle">Place :</h3>
              <p className="meetingPlace">
                We are Going to meet in {allUsersData[index].place}
              </p>
              <h3 className="meetingTitle">Meeting is About :</h3>
              <p className="meetingAbout">{allUsersData[index].subject}</p>
              <h3 className="meetingTitle">Meeting Time :</h3>
              <p className="meetingTime">
                Meeting At {allUsersData[index].time} In{" "}
                {allUsersData[index].date}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
