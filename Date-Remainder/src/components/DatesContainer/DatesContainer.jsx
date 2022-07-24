import DateDetails from "../DateDetails/DateDetails";
import "./dataesContainer.css";
import AddDate from "../AddDate/AddDate";
import { useRef } from "react";
import { Add, DeleteOutlined, Home } from "@mui/icons-material";
import { allUsersData } from "../shared/datesData";
import DateUpdate from "../DateUpdate/DateUpdate";

export default function DatesContainer({
  allData,
  rerender,
  setData,
  setUpdatedData,
}) {
  const showDates = useRef(null);
  const addDate = useRef(null);

  function navToAdd() {
    setUpdatedData({
      ...setData,
      value: true,
      showInfo: true,
    });

    if (showDates.current.classList.contains("active")) return;
    showDates.current.classList.add("active");
    addDate.current.classList.remove("active");
  }

  function navToUpdate(index) {
    showDates.current.classList.add("active");
    addDate.current.classList.remove("active");

    setUpdatedData({
      ...setData,
      value: false,
      showInfo: true,
      item: index,
    });
  }

  function navToInfo() {
    showDates.current.classList.add("active");
    addDate.current.classList.remove("active");

    setUpdatedData({
      ...setData,
      value: false,
      showInfo: false,
    });
  }

  function navToHome() {
    setUpdatedData({
      ...setData,
      value: true,
    });

    if (addDate.current.classList.contains("active")) return;
    showDates.current.classList.remove("active");
    addDate.current.classList.add("active");
  }

  function removeDates() {
    allUsersData.splice(0, allUsersData.length);
    rerender("");
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
                {allData.length > 0 ? (
                  <div className="dateDetails">
                    {allData.map((date, index) => (
                      <DateDetails
                        data={date}
                        key={index}
                        index={index}
                        rerender={rerender}
                        navToUpdate={navToUpdate}
                        navToInfo={navToInfo}
                      />
                    ))}
                  </div>
                ) : (
                  <h2>No Dates For Today</h2>
                )}
              </div>

              {/* add date form */}
              <div className="addDate" ref={addDate}>
                {setData.value ? (
                  <AddDate
                    addElem={rerender}
                    update={setData}
                    navigator={navToHome}
                  />
                ) : (
                  <DateUpdate
                    addElem={rerender}
                    update={setData}
                    navigator={navToHome}
                  />
                )}
              </div>
            </div>

            {/* Footer navigation */}
            <div className="showPages d-flex align-items-center justify-content-between">
              <button
                className="btn btn-success mb-2"
                onClick={navToAdd}
                title="Add date"
              >
                <Add />
              </button>
              <button
                className="btn btn-success mb-2"
                onClick={navToHome}
                title="Home Page"
              >
                <Home />
              </button>
              <button
                className="btn btn-success mb-2"
                onClick={removeDates}
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
