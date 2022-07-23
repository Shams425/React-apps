import React, { useState } from "react";
import "./addDate.css";
import axios from "axios";
import { allUsersData } from "../shared/datesData";

export default function AddDate({ addElem }) {
  const [dateValues, setDateValues] = useState({
    name: "",
    place: "",
    time: "",
    subject: "",
  });

  function addHandler() {
    allUsersData.push({
      id: Math.random(),
      name: dateValues.name,
      time: dateValues.time,
      place: dateValues.place,
      subject: dateValues.subject,
    });

    addElem({ ...dateValues });
    document
      .querySelectorAll(".form-control")
      .forEach((elem) => (elem.value = ""));

    setDateValues("");
    console.log(allUsersData);
  }

  return (
    <div className="add-date">
      <h1 className="text-center mb-3">Add New Date</h1>
      <div className="dateTitle mb-4">
        <h3>Date with </h3>
        <input
          type="text"
          name="name"
          className="form-control"
          value={dateValues.name || ""}
          onChange={(e) =>
            setDateValues({ ...dateValues, [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="datePlace mb-4">
        <h3>Date Place </h3>
        <input
          type="text"
          name="place"
          className="form-control"
          value={dateValues.place || ""}
          onChange={(e) =>
            setDateValues({ ...dateValues, [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="dateSubject mb-4">
        <h3>Subject </h3>
        <textarea
          name="subject"
          className="form-control"
          value={dateValues.subject || ""}
          onChange={(e) =>
            setDateValues({ ...dateValues, [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="dateTime mb-4">
        <h3>Date Time </h3>
        <input
          type="date"
          name="time"
          className="form-control"
          value={dateValues.time || ""}
          onChange={(e) =>
            setDateValues({ ...dateValues, [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="submitAdd">
        <button className="btn btn-primary" onClick={addHandler}>
          Add
        </button>
      </div>
    </div>
  );
}
