import React, { useRef, useState } from "react";
import "./dateUpdate.css";
import { allUsersData } from "../shared/datesData";

export default function DateUpdate({ addElem, update, navigator }) {
  const [dateValues, setDateValues] = useState(allUsersData[update.item]);
  const UpdateForm = useRef(null);

  function updateHandler() {
    UpdateForm.current.onSubmit = (e) => {
      e.preventDefault();
    };

    allUsersData[update.item] = { ...dateValues };

    addElem({ ...dateValues });
    document
      .querySelectorAll(".form-control")
      .forEach((elem) => (elem.value = ""));

    setDateValues("");
    navigator();
  }

  return (
    <div className="add-date">
      <h1 className="text-center mb-3">Update Your Date</h1>
      {/* Update form start */}
      <form action="" ref={UpdateForm}>
        {/* name input */}
        <div className="name mb-3">
          <label className="mb-2">Name </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={dateValues.name}
            onChange={(e) =>
              setDateValues({
                ...dateValues,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="Meeting With . . ."
            required="true"
          />
        </div>

        {/* Place input */}
        <div className="datePlace mb-4">
          <label className="mb-2">Place </label>
          <input
            type="text"
            name="place"
            className="form-control"
            value={dateValues.place}
            onChange={(e) =>
              setDateValues({
                ...dateValues,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="Meeting In . . ."
            required="true"
          />
        </div>

        {/* Subject input */}
        <div className="dateSubject mb-4">
          <label className="mb-2">Subject </label>
          <textarea
            name="subject"
            className="form-control"
            value={dateValues.subject}
            onChange={(e) =>
              setDateValues({
                ...dateValues,
                [e.target.name]: e.target.value,
              })
            }
            placeholder="Meeting about . . ."
            required="true"
          />
        </div>
      </form>

      {/* Time input */}
      <div className="dateTime mb-4">
        <label className="mb-2">Time </label>
        <input
          type="number"
          name="time"
          className="form-control"
          value={dateValues.time}
          onChange={(e) =>
            setDateValues({ ...dateValues, [e.target.name]: e.target.value })
          }
          placeholder="Meeting Time in Hours . . ."
          required="true"
        />
      </div>

      {/* date input */}
      <div className="dateTime mb-4">
        <label className="mb-2">Date </label>
        <input
          type="date"
          name="date"
          className="form-control"
          value={dateValues.date}
          onChange={(e) =>
            setDateValues({ ...dateValues, [e.target.name]: e.target.value })
          }
          placeholder="Meeting Date . . ."
          required="true"
        />
      </div>

      <div className="submitAdd">
        <input
          type="submit"
          value="Update"
          className="form-control btn btn-primary"
          onClick={updateHandler}
        />
      </div>
    </div>
  );
}
