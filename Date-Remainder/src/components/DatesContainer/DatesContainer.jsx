import DateDetails from "../DateDetails/DateDetails";
import "./dataesContainer.css";
import AddDate from "../AddDate/AddDate";
import { useRef } from "react";
import { Add, DeleteOutlined, Home } from "@mui/icons-material";
import { allUsersData } from "../Shared/datesData";
import DateUpdate from "../DateUpdate/DateUpdate";
import ShowInfo from "../ShowInfo/ShowInfo";

export default function DatesContainer({
  allData,
  rerender,
  updateData,
  setUpdatedData,
}) {
  const showDates = useRef(null);
  const addDate = useRef(null);

  function navToAdd() {
    setUpdatedData({
      ...updateData,
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
      ...updateData,
      value: false,
      showInfo: true,
      item: index,
    });
  }

  function navToInfo(index) {
    showDates.current.classList.add("active");
    addDate.current.classList.remove("active");

    setUpdatedData({
      ...updateData,
      value: false,
      showInfo: false,
      item: index,
    });
  }

  function navToHome() {
    setUpdatedData({
      ...updateData,
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
              <h2 className="mb-4">
                {allData.length > 0
                  ? `You Have ${allUsersData.length} Date`
                  : "You Don't Have Dates"}
              </h2>
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
                {updateData.value ? (
                  <AddDate
                    addElem={rerender}
                    update={updateData}
                    navigator={navToHome}
                  />
                ) : updateData.showInfo ? (
                  <DateUpdate
                    addElem={rerender}
                    update={updateData}
                    navigator={navToHome}
                  />
                ) : (
                  <ShowInfo update={updateData} />
                )}
              </div>
            </div>

            {/* Footer navigation */}
            <div className="showPages d-flex align-items-center justify-content-between">
              <button
                className="btn btn-success mb-2"
                onClick={navToAdd}
                title="Add new Date"
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
                title="Delete All Dates"
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
