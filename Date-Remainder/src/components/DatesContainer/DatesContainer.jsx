import DateDetails from "../DateDetails/DateDetails";
import "./dataesContainer.css";
import AddDate from "../AddDate/AddDate";
import { useRef } from "react";
import { Add, DeleteOutlined, Home } from "@mui/icons-material";
import { allUsersData } from "../shared/datesData";

export default function DatesContainer({ allData, rerender }) {
  const showDates = useRef(null);
  const addDate = useRef(null);
  const addBtn = useRef(null);

  function addDateHandler() {
    if (showDates.current.classList.contains("active")) return;
    showDates.current.classList.add("active");
    addDate.current.classList.remove("active");
  }

  function returnHome() {
    console.log(allData);
    if (addDate.current.classList.contains("active")) return;
    showDates.current.classList.remove("active");
    addDate.current.classList.add("active");
  }

  function removeDates() {
    allUsersData.splice(0, allUsersData.length);
    rerender("");
    console.log(allUsersData);
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
                {allData.map((date, index) => {
                  return <DateDetails data={date} key={index} />;
                })}
              </div>

              {/* add date form */}
              <div className="addDate" ref={addDate}>
                <AddDate addElem={rerender} />
              </div>
            </div>

            {/* Footer navigation */}
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
              <button
                className="btn btn-success mb-2"
                onClick={removeDates}
                ref={addBtn}
                title="Home Page"
              >
                <DeleteOutlined />
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
