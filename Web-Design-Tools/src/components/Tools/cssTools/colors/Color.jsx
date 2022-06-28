import React, { useState } from "react";
import { ChromePicker } from "react-color";
import "./color.css";

export default function Color() {
  const [color, setColor] = useState("fff");

  function showType(event) {
    const tabs = document.querySelectorAll(".choose .colorTab");
    const tabContent = document.querySelectorAll(
      ".colorTitleContainer .content"
    );
    const codeContainer = document.querySelectorAll(".showCode");
    const viewBorder = document.querySelectorAll(".showResult");

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContent.forEach((content) => {
      content.classList.remove("show");
    });
    codeContainer.forEach((code) => {
      code.classList.remove("show");
    });
    viewBorder.forEach((border) => {
      border.classList.remove("show");
    });

    event.target.classList.add("active");

    document
      .querySelector(event.target.getAttribute("data-target"))
      .classList.add("show");
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="colorTitleContainer">
            <div className="choose d-flex mb-3">
              <p
                className="all colorTab active"
                data-target="#picker"
                data-show-code="#allCode"
                onClick={(e) => showType(e)}
              >
                Color Picker
              </p>
              <p
                className="each colorTab"
                data-target="#select"
                data-show-code="#eachCode"
                onClick={(e) => showType(e)}
              >
                Select Color
              </p>
              <p
                className="each colorTab"
                data-target="#template"
                data-show-code="#eachCode"
                onClick={(e) => showType(e)}
              >
                Group Colors
              </p>
            </div>

            <div className="tabContent">
              <div className="content colorPicker show" id="picker">
                <div className="showColor d-flex align-items-center justify-content-between">
                  <ChromePicker
                    color={color}
                    onChange={(e) => setColor(e.hex)}
                    className="mt-3 col-lg-4 col-md-6 col-sm-12"
                  />
                  <div className="colorPreview col-lg-8 col-md-6 col-sm-12">
                    <span className="result" style={{ backgroundColor: color }}>
                      It's working
                    </span>
                  </div>
                </div>

                <h3 className="text-center">{color}</h3>
              </div>
              <div className="content selectColor" id="select">
                <h2>Select Color is working</h2>
              </div>
              <div className="content colorTemplates" id="template">
                <h2>Select template colors is working</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
