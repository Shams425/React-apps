import React from "react";
import "./dataesContainer.css";

export default function DatesContainer() {
  return (
    <section>
      <main>
        <div className="container">
          <div className="row">
            <div className="title">
              <h2 className="mb-4">Today Dates</h2>
            </div>

            {/* datesContainer */}
            <div className="datesContainer"></div>
          </div>
        </div>
      </main>
    </section>
  );
}
