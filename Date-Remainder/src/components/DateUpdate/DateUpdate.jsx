import React, { useRef, useState } from "react";
import { allUsersData } from "../Shared/datesData";

export default function DateUpdate({ addElem, update, navigator }) {
  const [dateValues, setDateValues] = useState(allUsersData[update.item]);
  const UpdateForm = useRef(null);

  const updateHandler = (e) => {
    e.preventDefault();

    allUsersData[update.item] = { ...dateValues };

    addElem({ ...dateValues });
    document
      .querySelectorAll(".form-control")
      .forEach((elem) => (elem.value = ""));

    setDateValues("");
    navigator();
  };

  return (
    allUsersData.length > 0 && (
      <div className="Update-date">
        {/*  update form */}
        <form action="" ref={UpdateForm} onSubmit={updateHandler}>
          <h1 className="text-center mb-3">Update Your Date</h1>
          {/* name input */}
          <div className="name mb-3">
            <label className="mb-2">Name </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={dateValues.name || ""}
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
              value={dateValues.place || ""}
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
              value={dateValues.subject || ""}
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

          {/* Time input */}
          <div className="dateTime mb-4">
            <label className="mb-2">Time </label>
            <input
              type="number"
              name="time"
              className="form-control"
              value={dateValues.time || ""}
              onChange={(e) =>
                setDateValues({
                  ...dateValues,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Meeting Time in Hours . . ."
              required="true"
            />

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="timeFormat"
                value={dateValues.timeFormat || ""}
                onChange={(e) =>
                  setDateValues({
                    ...dateValues,
                    [e.target.name]: "am",
                  })
                }
              />
              <label className="form-check-label" for="">
                am
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="timeFormat"
                value={dateValues.timeFormat || ""}
                onChange={(e) =>
                  setDateValues({
                    ...dateValues,
                    [e.target.name]: "pm",
                  })
                }
              />
              <label className="form-check-label" for="">
                pm
              </label>
            </div>
          </div>

          {/* date input */}
          <div className="dateTime mb-4">
            <label className="mb-2">Date </label>
            <input
              type="date"
              name="date"
              className="form-control"
              value={dateValues.date || ""}
              onChange={(e) =>
                setDateValues({
                  ...dateValues,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="Meeting Date . . ."
              required="true"
            />
          </div>

          <div className="submitAdd">
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    )
  );
}
