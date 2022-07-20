import { Info, Close, Edit } from "@mui/icons-material";
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
      <div className="dateBehavior">
        <button
          type="button"
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#modelId"
        >
          <Info className="infoIcon" />
        </button>

        <button className="btn">
          <Edit />
        </button>

        <button className="btn">
          <Close />
        </button>
      </div>

      {/* modal for showing more information about dates */}
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
              <h5 className="modal-title">Your Date with Ahmed</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h3 className="meetingTitle">Place :</h3>
              <p className="meetingPlace">We are Going to meet in Khartoum</p>
              <h3 className="meetingTitle">Meeting is About :</h3>
              <p className="meetingAbout">
                Take Care about the company money problems
              </p>
              <h3 className="meetingTitle">Meeting Time :</h3>
              <p className="meetingTime">Today at 4pm</p>
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
