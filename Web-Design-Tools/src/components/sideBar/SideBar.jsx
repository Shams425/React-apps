import React from "react";
import "./sidebar.css";
import {
  ContentCopy,
  TextFields,
  Gradient,
  CheckBoxOutlineBlank,
  Transform,
  Palette,
  Filter,
  MouseOutlined,
  LinkOutlined,
  Input,
  Forum,
  AppRegistrationSharp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="sideWrapper">
      <div className="cssTools mb-4">
        <div className="accordion" id="cssTools">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#cssToolsContainer"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                CSS
              </button>
            </h2>
            <div
              id="cssToolsContainer"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#cssTools"
            >
              <div className="accordion-body">
                <ul className="tools">
                  <Link className="link" to="cssTools/boxShadow">
                    <li>
                      <ContentCopy />
                      <p>Box Shadow</p>
                    </li>
                  </Link>
                  <Link className="link" to="cssTools/textShadow">
                    <li>
                      <TextFields />
                      <p>Text Shadow</p>
                    </li>
                  </Link>
                  <Link className="link" to="cssTools/gradient">
                    <li>
                      <Gradient />
                      <p>Gradient</p>
                    </li>
                  </Link>
                  <Link className="link" to="cssTools/border">
                    <li>
                      <CheckBoxOutlineBlank />
                      <p>Border</p>
                    </li>
                  </Link>
                  <Link
                    className="link border-radius"
                    to="cssTools/borderRadius"
                  >
                    <li>
                      <span className="borderRadius"></span>
                      <p>Border-radius</p>
                    </li>
                  </Link>
                  <Link className="link" to="cssTools/filter">
                    <li>
                      <Filter />
                      <p>Filter</p>
                    </li>
                  </Link>
                  <Link className="link" to="cssTools/cursor">
                    <li>
                      <MouseOutlined />
                      <p>Cursor</p>
                    </li>
                  </Link>
                  <Link className="link" to="cssTools/transform">
                    <li>
                      <Transform />
                      <p>Transform</p>
                    </li>
                  </Link>
                  <Link className="link" to="cssTools/colors">
                    <li>
                      <Palette />
                      <p>Colors</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="htmlTools">
        <div className="accordion" id="htmlTool">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#htmlElements"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                HTML
              </button>
            </h2>
            <div
              id="htmlElements"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#htmlTool"
            >
              <div className="accordion-body">
                <ul>
                  <Link to="/htmlTools/inputs" className="link">
                    <li>
                      <Input />
                      <p>Inputs</p>
                    </li>
                  </Link>
                  <Link to="/htmlTools/buttons" className="link">
                    <li>
                      <span className="button"></span>
                      <p>Buttons</p>
                    </li>
                  </Link>
                  <Link to="/htmlTools/links" className="link">
                    <li>
                      <LinkOutlined />
                      <p>Links</p>
                    </li>
                  </Link>
                  <Link to="/htmlTools/forms" className="link">
                    <li>
                      <Forum />
                      <p>Forms</p>
                    </li>
                  </Link>
                  {/* <Link to="/htmlTools/cards" className="link">
                    <li>
                      <AppRegistrationSharp />
                      <p>Cards</p>
                    </li>
                  </Link> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
