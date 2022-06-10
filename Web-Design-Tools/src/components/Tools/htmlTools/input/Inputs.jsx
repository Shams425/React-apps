import { ContentCopy } from "@mui/icons-material";
import React from "react";
import "./input.css";
import { inputBGEffect, inputBorderEffect } from "../../../shared/showCode";

export default function Inputs() {
  function showCode(ele) {
    const codeHTML = document.querySelector("code.html");
    const codeCSS = document.querySelector("code.css");
    console.log(ele);
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
      default:
        return;
    }
  }

  function displayCodeContainer(elem) {
    elem.classList.add("show");
    document.querySelector(elem.dataset.change).classList.remove("show");

    document.querySelector(elem.dataset.target).classList.add("show");
    document.querySelector(elem.dataset.container).classList.remove("show");
  }

  return (
    <div className="wrapper">
      <div className="inputContainer">
        <div className="container">
          <div className="row">
            <div className="effects col-lg-6">
              <h2 className="mb-3">Input Focus Effects: </h2>
              <div className="borderEffects">
                <div class="col-3">
                  <input
                    class="effect-1"
                    id="effect1"
                    type="text"
                    placeholder="Effect 1"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-border"></span>
                </div>
                <div class="col-3">
                  <input
                    class="effect-2"
                    id="effect2"
                    type="text"
                    placeholder="Effect 2"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-border"></span>
                </div>
                <div class="col-3">
                  <input
                    class="effect-3"
                    id="effect3"
                    type="text"
                    placeholder="Effect 3"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-border"></span>
                </div>

                <div class="col-3">
                  <input
                    class="effect-4"
                    id="effect4"
                    type="text"
                    placeholder="Effect 4"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-border"></span>
                </div>
                <div class="col-3">
                  <input
                    class="effect-5"
                    id="effect5"
                    type="text"
                    placeholder="Effect 5"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-border"></span>
                </div>
                <div class="col-3">
                  <input
                    class="effect-6"
                    id="effect6"
                    type="text"
                    placeholder="Effect 6"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-border"></span>
                </div>

                <div class="col-3">
                  <input
                    class="effect-7"
                    id="effect7"
                    type="text"
                    placeholder="Effect 7"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-border">
                    <i></i>
                  </span>
                </div>
                <div class="col-3">
                  <input
                    class="effect-8"
                    id="effect8"
                    type="text"
                    placeholder="Effect 8"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-border">
                    <i></i>
                  </span>
                </div>
                <div class="col-3">
                  <input
                    class="effect-9"
                    id="effect9"
                    type="text"
                    placeholder="Effect 9"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-border">
                    <i></i>
                  </span>
                </div>
              </div>
              <div className="backgroundEffects">
                <div class="col-3">
                  <input
                    class="effect-10"
                    type="text"
                    id="effect10"
                    placeholder="Effect 10"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-bg"></span>
                </div>
                <div class="col-3">
                  <input
                    class="effect-11"
                    type="text"
                    id="effect11"
                    placeholder="Effect 11"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-bg"></span>
                </div>
                <div class="col-3">
                  <input
                    class="effect-12"
                    type="text"
                    id="effect12"
                    placeholder="Effect 12"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-bg"></span>
                </div>
                <div class="col-3">
                  <input
                    class="effect-13"
                    type="text"
                    id="effect13"
                    placeholder="Effect 13"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-bg"></span>
                </div>
                <div class="col-3">
                  <input
                    class="effect-14"
                    type="text"
                    id="effect14"
                    placeholder="Effect 14"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-bg"></span>
                </div>
                <div class="col-3">
                  <input
                    class="effect-15"
                    type="text"
                    id="effect15"
                    placeholder="Effect 15"
                    onFocus={(e) => showCode(e.target)}
                  />
                  <span class="focus-bg"></span>
                </div>
              </div>
              <div className="labelEffects">
                <div class="col-3 input-effect">
                  <input class="effect-16" type="text" placeholder="" />
                  <label>Effect 16</label>
                  <span class="focus-border"></span>
                </div>
                <div class="col-3 input-effect">
                  <input class="effect-17" type="text" placeholder="" />
                  <label>Effect 17</label>
                  <span class="focus-border"></span>
                </div>
                <div class="col-3 input-effect">
                  <input class="effect-18" type="text" placeholder="" />
                  <label>Effect 18</label>
                  <span class="focus-border"></span>
                </div>

                <div class="col-3 input-effect">
                  <input class="effect-19" type="text" placeholder="" />
                  <label>Effect 19</label>
                  <span class="focus-border">
                    <i></i>
                  </span>
                </div>
                <div class="col-3 input-effect">
                  <input class="effect-20" type="text" placeholder="" />
                  <label>Effect 20</label>
                  <span class="focus-border">
                    <i></i>
                  </span>
                </div>
                <div class="col-3 input-effect">
                  <input class="effect-21" type="text" placeholder="" />
                  <label>Effect 21</label>
                  <span class="focus-border">
                    <i></i>
                  </span>
                </div>
                <div class="col-3 input-effect">
                  <input class="effect-22" type="text" placeholder="" />
                  <label>Effect 22</label>
                  <span class="focus-bg"></span>
                </div>
                <div class="col-3 input-effect">
                  <input class="effect-23" type="text" placeholder="" />
                  <label>Effect 23</label>
                  <span class="focus-bg"></span>
                </div>
                <div class="col-3 input-effect">
                  <input class="effect-24" type="text" placeholder="" />
                  <label>Effect 24</label>
                  <span class="focus-bg"></span>
                </div>
              </div>
            </div>
            <div className="viewCodeContainer col-lg-6">
              <div className="title d-flex">
                <code
                  className="htmlTitle show"
                  id="htmlTitle"
                  data-target="#htmlContainer"
                  data-change="#cssTitle"
                  data-container="#cssContainer"
                  onClick={(e) => displayCodeContainer(e.target)}
                >
                  HTML
                </code>
                <code
                  className="cssTitle"
                  id="cssTitle"
                  data-target="#cssContainer"
                  data-change="#htmlTitle"
                  data-container="#htmlContainer"
                  onClick={(e) => displayCodeContainer(e.target)}
                >
                  CSS
                </code>
              </div>
              <div className="showCode">
                <div className="htmlCodeContainer show" id="htmlContainer">
                  <code className="html">Focus to show HTML Code </code>
                  <ContentCopy
                    className="copyIcon"
                    titleAccess="copy"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        document.querySelector("code.html").textContent
                      )
                    }
                  />
                </div>
                <div className="cssCodeContainer" id="cssContainer">
                  <code className="css">Focus to show CSS Code</code>
                  <ContentCopy
                    className="copyIcon"
                    titleAccess="copy"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        document.querySelector("code.css").textContent
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
