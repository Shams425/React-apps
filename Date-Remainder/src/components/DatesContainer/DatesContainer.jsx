import React from "react";
import DateDetails from "../DateDetails/DateDetails";
import "./dataesContainer.css";
import AddDate from "../AddDate/AddDate";
import { useRef } from "react";
import { Add, Home } from "@mui/icons-material";

export default function DatesContainer() {
  const showDates = useRef(null);
  const addDate = useRef(null);
  const addBtn = useRef(null);

  function addDateHandler() {
    if (showDates.current.classList.contains("active")) return;
    showDates.current.classList.add("active");
    addDate.current.classList.remove("active");
  }

  function returnHome() {
    if (addDate.current.classList.contains("active")) return;
    showDates.current.classList.remove("active");
    addDate.current.classList.add("active");
  }

  return (
    <section>
      <main className="my-5">
        <div className="wrapper container">
          <div className="row">
            <div className="title">
              <h2 className="mb-4">Today Dates</h2>
            </div>

            {/* datesContainer */}
            <div className="datesContainer p-4 mb-3">
              {/* show today dates */}
              <div className="showDates" ref={showDates}>
                <DateDetails />
                <DateDetails />
                <DateDetails />
                <DateDetails />
                <DateDetails />
                <DateDetails />
                <DateDetails />
                <DateDetails />
                <DateDetails />
                <DateDetails />
                <DateDetails />
                <DateDetails />
              </div>

              <div className="addDate" ref={addDate}>
                <AddDate />
              </div>
            </div>

            {/* add date */}
            <div className="showPages d-flex align-items-center justify-content-between">
              <button
                className="btn btn-success mb-2"
                onClick={addDateHandler}
                ref={addBtn}
                title="Add date"
              >
                <Add />
              </button>
              <button
                className="btn btn-success mb-2"
                onClick={returnHome}
                ref={addBtn}
                title="Home Page"
              >
                <Home />
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
