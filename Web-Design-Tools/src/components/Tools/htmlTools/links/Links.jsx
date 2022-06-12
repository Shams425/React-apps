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
            <div className="links col-lg-6">
              <h2 className="mb-3">Links Hover Effect</h2>
              <h4 className="my-4">Underline effects</h4>
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
                <div className="link">
                  <p href="#" class="linkEffect-11">
                    <span>Effect-11</span>
                    <svg
                      class="linkWave linkWave--slide"
                      width="300%"
                      height="100%"
                      viewBox="0 0 1200 60"
                      preserveAspectRatio="none"
                    >
                      <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                    </svg>
                  </p>
                </div>
                <div className="link">
                  <p href="#" class="linkEffect-12">
                    <span>Effect 12</span>
                    <svg
                      class="linkHalfWave linkHalfWave--stroke linkHalfWave--arc"
                      width="100%"
                      height="18"
                      viewBox="0 0 59 18"
                    >
                      <path
                        d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842"
                        pathLength="1"
                      />
                    </svg>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-13">
                    <span>Effect 13</span>
                  </p>
                </div>
                <div class="link">
                  <p class="linkEffect-14">Effect 14</p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-15">
                    Effect 15
                  </p>
                </div>
              </div>
              <h4 className="my-4">Border effects</h4>
              <div className="borderLinks">
                <div className="link">
                  <p href="#" className="linkEffect-16">
                    <span>Effect 16</span>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-17">
                    Effect 17
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-18">
                    Effect 18
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-19">
                    Effect 19
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-20">
                    Effect 20
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-21">
                    Effect 21
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-22">
                    Effect 22
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-23" data-hover="Effect 23">
                    <span>Effect 23</span>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-24" data-hover="Effect 24">
                    <span>Effect 24</span>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-25">
                    <span>Effect 25</span>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-26">
                    <span>Effect 26</span>
                  </p>
                </div>

                <div className="link">
                  <p href="#" className="linkEffect-27">
                    <span>Effect 27</span>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-28">
                    <span>Effect 28</span>
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
