import { ContentCopy } from "@mui/icons-material";
import React from "react";
import "./input.css";
import {
  inputBGEffect,
  inputBorderEffect,
  inputLabelEffect,
} from "../../../shared/showCode";

export default function Inputs() {
  function showCode(ele) {
    const codeHTML = document.querySelector("code.htmlCode");
    const codeCSS = document.querySelector("code.cssCode");

    switch (ele.id) {
      case "effect1": {
        codeHTML.innerHTML = inputBorderEffect.effect1.html;
        codeCSS.innerHTML = inputBorderEffect.effect1.css;
        break;
      }
      case "effect2": {
        codeHTML.innerHTML = inputBorderEffect.effect2.html;
        codeCSS.innerHTML = inputBorderEffect.effect2.css;
        break;
      }
      case "effect3": {
        codeHTML.innerHTML = inputBorderEffect.effect3.html;
        codeCSS.innerHTML = inputBorderEffect.effect3.css;
        break;
      }
      case "effect4": {
        codeHTML.innerHTML = inputBorderEffect.effect4.html;
        codeCSS.innerHTML = inputBorderEffect.effect4.css;
        break;
      }
      case "effect5": {
        codeHTML.innerHTML = inputBorderEffect.effect5.html;
        codeCSS.innerHTML = inputBorderEffect.effect5.css;
        break;
      }
      case "effect6": {
        codeHTML.innerHTML = inputBorderEffect.effect6.html;
        codeCSS.innerHTML = inputBorderEffect.effect6.css;
        break;
      }
      case "effect7": {
        codeHTML.innerHTML = inputBorderEffect.effect7.html;
        codeCSS.innerHTML = inputBorderEffect.effect7.css;
        break;
      }
      case "effect8": {
        codeHTML.innerHTML = inputBorderEffect.effect8.html;
        codeCSS.innerHTML = inputBorderEffect.effect8.css;
        break;
      }
      case "effect9": {
        codeHTML.innerHTML = inputBorderEffect.effect9.html;
        codeCSS.innerHTML = inputBorderEffect.effect9.css;
        break;
      }
      case "effect10": {
        codeHTML.innerHTML = inputBGEffect.effect10.html;
        codeCSS.innerHTML = inputBGEffect.effect10.css;
        break;
      }
      case "effect11": {
        codeHTML.innerHTML = inputBGEffect.effect11.html;
        codeCSS.innerHTML = inputBGEffect.effect11.css;
        break;
      }
      case "effect12": {
        codeHTML.innerHTML = inputBGEffect.effect12.html;
        codeCSS.innerHTML = inputBGEffect.effect12.css;
        break;
      }
      case "effect13": {
        codeHTML.innerHTML = inputBGEffect.effect13.html;
        codeCSS.innerHTML = inputBGEffect.effect13.css;
        break;
      }
      case "effect14": {
        codeHTML.innerHTML = inputBGEffect.effect14.html;
        codeCSS.innerHTML = inputBGEffect.effect14.css;
        break;
      }
      case "effect15": {
        codeHTML.innerHTML = inputBGEffect.effect15.html;
        codeCSS.innerHTML = inputBGEffect.effect15.css;
        break;
      }
      case "effect16": {
        codeHTML.innerHTML = inputLabelEffect.effect16.html;
        codeCSS.innerHTML = inputLabelEffect.effect16.css;
        break;
      }
      case "effect17": {
        codeHTML.innerHTML = inputLabelEffect.effect17.html;
        codeCSS.innerHTML = inputLabelEffect.effect17.css;
        break;
      }
      case "effect18": {
        codeHTML.innerHTML = inputLabelEffect.effect18.html;
        codeCSS.innerHTML = inputLabelEffect.effect18.css;
        break;
      }
      case "effect19": {
        codeHTML.innerHTML = inputLabelEffect.effect19.html;
        codeCSS.innerHTML = inputLabelEffect.effect19.css;
        break;
      }
      case "effect20": {
        codeHTML.innerHTML = inputLabelEffect.effect20.html;
        codeCSS.innerHTML = inputLabelEffect.effect20.css;

        break;
      }
      case "effect21": {
        codeHTML.innerHTML = inputLabelEffect.effect21.html;
        codeCSS.innerHTML = inputLabelEffect.effect21.css;

        break;
      }
      case "effect22": {
        codeHTML.innerHTML = inputLabelEffect.effect22.html;
        codeCSS.innerHTML = inputLabelEffect.effect22.css;
        break;
      }
      case "effect23": {
        codeHTML.innerHTML = inputLabelEffect.effect23.html;
        codeCSS.innerHTML = inputLabelEffect.effect23.css;

        break;
      }
      case "effect24": {
        codeHTML.innerHTML = inputLabelEffect.effect24.html;
        codeCSS.innerHTML = inputLabelEffect.effect24.css;
        break;
      }
      default:
        return;
    }
  }

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
      <div className="inputContainer">
        <div className="container">
          <div className="row">
            <div className="effects col-lg-6">
              <h2 className="mb-3">Input Focus Effects: </h2>
              <div className="borderEffects">
                <div className="col-3">
                  <input
                    className="effect-1"
                    id="effect1"
                    type="text"
                    placeholder="Effect 1"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="col-3">
                  <input
                    className="effect-2"
                    id="effect2"
                    type="text"
                    placeholder="Effect 2"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="col-3">
                  <input
                    className="effect-3"
                    id="effect3"
                    type="text"
                    placeholder="Effect 3"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3">
                  <input
                    className="effect-4"
                    id="effect4"
                    type="text"
                    placeholder="Effect 4"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="col-3">
                  <input
                    className="effect-5"
                    id="effect5"
                    type="text"
                    placeholder="Effect 5"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="col-3">
                  <input
                    className="effect-6"
                    id="effect6"
                    type="text"
                    placeholder="Effect 6"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3">
                  <input
                    className="effect-7"
                    id="effect7"
                    type="text"
                    placeholder="Effect 7"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="col-3">
                  <input
                    className="effect-8"
                    id="effect8"
                    type="text"
                    placeholder="Effect 8"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="col-3">
                  <input
                    className="effect-9"
                    id="effect9"
                    type="text"
                    placeholder="Effect 9"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
              </div>
              <div className="backgroundEffects">
                <div className="col-3">
                  <input
                    className="effect-10"
                    type="text"
                    id="effect10"
                    placeholder="Effect 10"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-bg"></span>
                </div>
                <div className="col-3">
                  <input
                    className="effect-11"
                    type="text"
                    id="effect11"
                    placeholder="Effect 11"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-bg"></span>
                </div>
                <div className="col-3">
                  <input
                    className="effect-12"
                    type="text"
                    id="effect12"
                    placeholder="Effect 12"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-bg"></span>
                </div>
                <div className="col-3">
                  <input
                    className="effect-13"
                    type="text"
                    id="effect13"
                    placeholder="Effect 13"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-bg"></span>
                </div>
                <div className="col-3">
                  <input
                    className="effect-14"
                    type="text"
                    id="effect14"
                    placeholder="Effect 14"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-bg"></span>
                </div>
                <div className="col-3">
                  <input
                    className="effect-15"
                    type="text"
                    id="effect15"
                    placeholder="Effect 15"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span className="focus-bg"></span>
                </div>
              </div>
              <div className="labelEffects">
                <div className="col-3 input-effect">
                  <input
                    className="effect-16"
                    type="text"
                    id="effect16"
                    placeholder=" "
                    onFocus={(e) => showCode(e.target)}
                  />
                  <label>Effect 16</label>
                  <span className="focus-border"></span>
                </div>
                <div className="col-3 input-effect">
                  <input
                    className="effect-17"
                    id="effect17"
                    type="text"
                    placeholder=" "
                    onFocus={(e) => showCode(e.target)}
                  />
                  <label>Effect 17</label>
                  <span className="focus-border"></span>
                </div>
                <div className="col-3 input-effect">
                  <input
                    className="effect-18"
                    id="effect18"
                    type="text"
                    placeholder=" "
                    onFocus={(e) => showCode(e.target)}
                  />
                  <label>Effect 18</label>
                  <span className="focus-border"></span>
                </div>

                <div className="col-3 input-effect">
                  <input
                    className="effect-19"
                    id="effect19"
                    type="text"
                    placeholder=" "
                    onFocus={(e) => showCode(e.target)}
                  />
                  <label>Effect 19</label>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="col-3 input-effect">
                  <input
                    className="effect-20"
                    id="effect20"
                    type="text"
                    placeholder=" "
                    onFocus={(e) => showCode(e.target)}
                  />
                  <label>Effect 20</label>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="col-3 input-effect">
                  <input
                    className="effect-21"
                    id="effect21"
                    type="text"
                    placeholder=" "
                    onFocus={(e) => showCode(e.target)}
                  />
                  <label>Effect 21</label>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <div className="col-3 input-effect">
                  <input
                    className="effect-22"
                    id="effect22"
                    type="text"
                    placeholder=" "
                    onFocus={(e) => showCode(e.target)}
                  />
                  <label>Effect 22</label>
                  <span className="focus-bg"></span>
                </div>
                <div className="col-3 input-effect">
                  <input
                    className="effect-23"
                    id="effect23"
                    type="text"
                    placeholder=" "
                    onFocus={(e) => showCode(e.target)}
                  />
                  <label>Effect 23</label>
                  <span className="focus-bg"></span>
                </div>
                <div className="col-3 input-effect">
                  <input
                    className="effect-24"
                    id="effect24"
                    type="text"
                    placeholder=" "
                    onFocus={(e) => showCode(e.target)}
                  />
                  <label>Effect 24</label>
                  <span className="focus-bg"></span>
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
                  <code className="htmlCode">Focus to show HTML Code </code>
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
                  <code className="cssCode">Focus to show CSS Code</code>
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
