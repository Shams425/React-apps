import React from "react";
import { allUsersData } from "../Shared/datesData";
import { DateRange, Description, Person, Place } from "@mui/icons-material";

export default function ShowInfo({ update }) {
  return (
    // show info container
    <div className="showInfo">
      <h1 className="text-center mb-5 pt-3">More Info About your Date </h1>
      <div className="person d-flex mb-4">
        <Person className="info-icon" />
        <p>
          You have Date With
          <br /> {allUsersData[update.item].name}
        </p>
      </div>
      <div className="subject d-flex mb-4">
        <Description className="info-icon" />
        <p>
          Meeting is about <br />
          {allUsersData[update.item].subject}
        </p>
      </div>
      <div className="place d-flex mb-4">
        <Place className="info-icon" />
        <p>
          The Meeting will be in
          <br /> {allUsersData[update.item].place}
        </p>
      </div>
      <div className="time d-flex">
        <DateRange className="info-icon" />
        <p>
          Meeting Time at <br />
          {allUsersData[update.item].time}
          {allUsersData[update.item].timeFormat} In{" "}
          {allUsersData[update.item].date}
        </p>
      </div>
    </div>
  );
}
