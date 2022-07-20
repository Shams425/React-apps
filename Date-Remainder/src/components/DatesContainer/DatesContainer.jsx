import React from "react";
import DateDetails from "../DateDetails/DateDetails";
import "./dataesContainer.css";

export default function DatesContainer() {
  return (
    <section>
      <main className="my-5">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2 className="mb-4">Today Dates</h2>
            </div>

            {/* datesContainer */}
            <div className="datesContainer p-4">
              {/* show today dates */}
              <div className="todayDates">
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

              {/* show saved dates */}
              <div className="savedContainer"></div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
