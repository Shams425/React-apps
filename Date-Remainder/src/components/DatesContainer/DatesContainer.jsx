import DateDetails from "../DateDetails/DateDetails";
import "./dataesContainer.css";
import AddDate from "../AddDate/AddDate";
import { useRef } from "react";
import { Add, DeleteOutlined, Home } from "@mui/icons-material";
import axios from "axios";
import { allUsersData } from "../shared/datesData";

export default function DatesContainer() {
  const showDates = useRef(null);
  const addDate = useRef(null);
  const addBtn = useRef(null);

  let allDates = [...allUsersData];

  function addDateHandler() {
    if (showDates.current.classList.contains("active")) return;
    showDates.current.classList.add("active");
    addDate.current.classList.remove("active");
  }

  function returnHome() {
    console.log(allUsersData);
    if (addDate.current.classList.contains("active")) return;
    showDates.current.classList.remove("active");
    addDate.current.classList.add("active");
  }

  function removeDates() {
    allDates.map((_, index) =>
      axios
        .delete(`http://localhost:4000/posts/${allDates[index].id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    );
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
                {allUsersData.map((date, index) => {
                  return <DateDetails data={date} key={index} />;
                })}
              </div>

              {/* add date form */}
              <div className="addDate" ref={addDate}>
                <AddDate data={allDates} />
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
