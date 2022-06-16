import { ContentCopy } from "@mui/icons-material";
import React from "react";
import { ButtonEffects } from "../../../shared/showCode";
import "./button.css";

export default function Buttons() {
  function showCode(ele) {
    const codeHTML = document.querySelector("code.htmlCode");
    const codeCSS = document.querySelector("code.cssCode");

    switch (ele) {
      case "button1": {
        codeHTML.innerHTML = ButtonEffects.button1.html;
        codeCSS.innerHTML = ButtonEffects.button1.css;
        break;
      }
      case "button2": {
        codeHTML.innerHTML = ButtonEffects.button2.html;
        codeCSS.innerHTML = ButtonEffects.button2.css;
        break;
      }
      case "button3": {
        codeHTML.innerHTML = ButtonEffects.button3.html;
        codeCSS.innerHTML = ButtonEffects.button3.css;
        break;
      }
      case "button4": {
        codeHTML.innerHTML = ButtonEffects.button4.html;
        codeCSS.innerHTML = ButtonEffects.button4.css;
        break;
      }
      case "button5": {
        codeHTML.innerHTML = ButtonEffects.button5.html;
        codeCSS.innerHTML = ButtonEffects.button5.css;
        break;
      }
      case "button6": {
        codeHTML.innerHTML = ButtonEffects.button6.html;
        codeCSS.innerHTML = ButtonEffects.button6.css;
        break;
      }
      case "button7": {
        codeHTML.innerHTML = ButtonEffects.button7.html;
        codeCSS.innerHTML = ButtonEffects.button7.css;
        break;
      }
      case "button8": {
        codeHTML.innerHTML = ButtonEffects.button8.html;
        codeCSS.innerHTML = ButtonEffects.button8.css;
        break;
      }
      case "button9": {
        codeHTML.innerHTML = ButtonEffects.button9.html;
        codeCSS.innerHTML = ButtonEffects.button9.css;
        break;
      }
      case "button10": {
        codeHTML.innerHTML = ButtonEffects.button10.html;
        codeCSS.innerHTML = ButtonEffects.button10.css;
        break;
      }
      case "button11": {
        codeHTML.innerHTML = ButtonEffects.button11.html;
        codeCSS.innerHTML = ButtonEffects.button11.css;
        break;
      }
      case "button12": {
        codeHTML.innerHTML = ButtonEffects.button12.html;
        codeCSS.innerHTML = ButtonEffects.button12.css;
        break;
      }
      case "button13": {
        codeHTML.innerHTML = ButtonEffects.button13.html;
        codeCSS.innerHTML = ButtonEffects.button13.css;
        break;
      }
      case "button14": {
        codeHTML.innerHTML = ButtonEffects.button14.html;
        codeCSS.innerHTML = ButtonEffects.button14.css;
        break;
      }
      case "button15": {
        codeHTML.innerHTML = ButtonEffects.button15.html;
        codeCSS.innerHTML = ButtonEffects.button15.css;
        break;
      }
      case "button16": {
        codeHTML.innerHTML = ButtonEffects.button16.html;
        codeCSS.innerHTML = ButtonEffects.button16.css;
        break;
      }
      case "button17": {
        codeHTML.innerHTML = ButtonEffects.button17.html;
        codeCSS.innerHTML = ButtonEffects.button17.css;
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
      <div className="buttonContainer">
        <div className="container">
          <div className="row">
            <div className="buttons col-lg-6">
              <h2 className="mb-3">Button Hover Effect</h2>
              <div className="backgroundEffect mb-3">
                <button
                  className="btn btn-effect-1"
                  id="button1"
                  onClick={(e) => showCode(e.target.id)}
                >
                  Button 1
                </button>
                <button
                  className="btn btn-effect-2"
                  id="button2"
                  onClick={(e) => showCode(e.target.id)}
                >
                  Button 2
                </button>
                <button
                  className="btn btn-effect-3"
                  id="button3"
                  onClick={(e) => showCode(e.target.id)}
                >
                  Button 3
                </button>
                <button
                  className="btn btn-effect-4"
                  id="button4"
                  onClick={(e) => showCode(e.target.id)}
                >
                  Button 4
                </button>
                <button
                  className="btn btn-effect-5"
                  id="button5"
                  onClick={(e) => showCode(e.target.id)}
                >
                  Button 5
                </button>
              </div>
              <div className="buttonTransformEffect mb-3">
                <button
                  className="btn btn-effect-6"
                  id="button6"
                  onClick={(e) => showCode(e.target.id)}
                >
                  Button 6
                </button>
                <button
                  className="btn btn-effect-7"
                  id="button7"
                  onClick={(e) => showCode(e.target.id)}
                >
                  Button 7
                </button>
                <button
                  className="btn btn-effect-8"
                  id="button8"
                  onClick={(e) => showCode(e.target.id)}
                >
                  Button 8
                </button>
              </div>
              <div className="changeFaceEffect mb-3">
                <div className="btn btn-effect-9">
                  <div
                    className="top-face"
                    id="button9"
                    onClick={(e) => showCode(e.target.id)}
                  >
                    Top Face
                  </div>
                  <div className="front-face">Front Face</div>
                </div>
                <div className="btn btn-effect-10">
                  <div
                    className="bottom-face"
                    id="button10"
                    onClick={(e) => showCode(e.target.id)}
                  >
                    Bottom Face
                  </div>
                  <div className="front-face">Front Face</div>
                </div>
                <div className="btn btn-effect-11">
                  <div className="frontFace">Front Face</div>
                  <div
                    className="leftFace"
                    id="button11"
                    onClick={(e) => showCode(e.target.id)}
                  >
                    left Face
                  </div>
                </div>
                <div className="btn btn-effect-12">
                  <div className="frontFace">Front Face</div>
                  <div
                    className="rightFace"
                    id="button12"
                    onClick={(e) => showCode(e.target.id)}
                  >
                    right Face
                  </div>
                </div>
                <div className="btn btn-effect-13">
                  <div className="frontFace">Front Face</div>
                  <div
                    className="backFace"
                    id="button13"
                    onClick={(e) => showCode(e.target.id)}
                  >
                    back Face
                  </div>
                </div>
              </div>
              <div className="otherEffects mb-3">
                <button
                  className="btn btn-effect-14"
                  id="button14"
                  onClick={(e) => showCode(e.target.id)}
                >
                  Button 14
                </button>
                <button
                  className="btn btn-effect-15"
                  id="button15"
                  onClick={(e) => showCode(e.target.id)}
                >
                  Button 15
                </button>
                <button
                  className="btn btn-effect-16"
                  id="button16"
                  onClick={(e) => showCode(e.target.id)}
                >
                  Button 16
                </button>
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
