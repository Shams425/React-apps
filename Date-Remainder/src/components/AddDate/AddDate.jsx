import React from "react";
import "./addDate.css";

export default function AddDate() {
  return (
    <div className="add-date">
      <h1 className="text-center mb-5">Add New Date</h1>
      <div className="dateTitle mb-4">
        <h3>Date with </h3>
        <input type="text" className="form-control" />
      </div>

      <div className="datePlace mb-4">
        <h3>Date Place </h3>
        <input type="text" className="form-control" />
      </div>

      <div className="dateSubject mb-4">
        <h3>Subject </h3>
        <textarea className="form-control" />
      </div>

      <div className="dateTime mb-4">
        <h3>Date Time </h3>
        <input type="date" className="form-control" />
      </div>

      <div className="submitAdd">
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
}
