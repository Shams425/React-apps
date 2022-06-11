import { ContentCopy } from "@mui/icons-material";
import React from "react";
import "./links.css";

export default function Links() {
  function displayCodeContainer(elem) {
    const codeTitles = document.querySelectorAll(".codeTitle");
    const codeContainer = document.querySelectorAll(".codeContainer");

    codeTitles.forEach((title) => title.classList.remove("show"));
    elem.classList.add("show");

    codeContainer.forEach((container) => container.classList.remove("show"));
    document.querySelector(elem.dataset.target).classList.add("show");
  }
  return (
    <div className="wrapper">
      <div className="linksContainer">
        <div className="container">
          <div className="row">
            <h2 className="mb-3">Links Hover Effect</h2>
            <div className="links col-lg-6">
              <div className="underLineLinks">
                <div className="link">
                  <p href="#" className="linkEffect-1" role="link">
                    Effect 1
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-2" role="link">
                    <span>Effect 2</span>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-3">
                    Effect 3
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-4">
                    Effect 4
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-5">
                    Effect 5
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-6">
                    <span>Effect 6</span>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-7">
                    Effect 7
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-8">
                    Effect 8
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-9">
                    Effect 9
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-10">
                    Effect 10
                  </p>
                </div>
              </div>
            </div>

            <div className="viewCodeContainer col-lg-6">
              <div className="title d-flex">
                <code
                  className="codeTitle html show"
                  data-target="#htmlContainer"
                  onClick={(e) => displayCodeContainer(e.target)}
                >
                  HTML
                </code>
                <code
                  className="codeTitle css"
                  data-target="#cssContainer"
                  onClick={(e) => displayCodeContainer(e.target)}
                >
                  CSS
                </code>
              </div>
              <div className="showCode">
                <div className="codeContainer show" id="htmlContainer">
                  <code className="htmlCode">click to show HTML Code </code>
                  <ContentCopy
                    className="copyIcon"
                    titleAccess="copy"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        document.querySelector("code.htmlCode").textContent
                      )
                    }
                  />
                </div>
                <div className="codeContainer" id="cssContainer">
                  <code className="cssCode">click to show CSS Code</code>
                  <ContentCopy
                    className="copyIcon"
                    titleAccess="copy"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        document.querySelector("code.cssCode").textContent
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
