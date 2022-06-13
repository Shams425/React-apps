import { ContentCopy } from "@mui/icons-material";
import React from "react";
import "./links.css";
import { linkEffects } from "../../../shared/showCode";

export default function Links() {
  function displayCodeContainer(elem) {
    const codeTitles = document.querySelectorAll(".codeTitle");
    const codeContainer = document.querySelectorAll(".codeContainer");

    codeTitles.forEach((title) => title.classList.remove("show"));
    elem.classList.add("show");

    codeContainer.forEach((container) => container.classList.remove("show"));
    document.querySelector(elem.dataset.target).classList.add("show");
  }

  function showCode(ele) {
    const codeHTML = document.querySelector("code.htmlCode");
    const codeCSS = document.querySelector("code.cssCode");

    console.log(ele);

    switch (ele.id) {
      case "link1": {
        codeHTML.innerHTML = linkEffects.linkEffect1.html;
        codeCSS.innerHTML = linkEffects.linkEffect1.css;
        break;
      }
      case "link2": {
        codeHTML.innerHTML = linkEffects.linkEffect2.html;
        codeCSS.innerHTML = linkEffects.linkEffect2.css;
        break;
      }
      case "link3": {
        codeHTML.innerHTML = linkEffects.linkEffect3.html;
        codeCSS.innerHTML = linkEffects.linkEffect3.css;
        break;
      }
      case "link4": {
        codeHTML.innerHTML = linkEffects.linkEffect4.html;
        codeCSS.innerHTML = linkEffects.linkEffect4.css;
        break;
      }
      case "link5": {
        codeHTML.innerHTML = linkEffects.linkEffect5.html;
        codeCSS.innerHTML = linkEffects.linkEffect5.css;
        break;
      }
      case "link6": {
        codeHTML.innerHTML = linkEffects.linkEffect6.html;
        codeCSS.innerHTML = linkEffects.linkEffect6.css;
        break;
      }
      case "link7": {
        codeHTML.innerHTML = linkEffects.linkEffect7.html;
        codeCSS.innerHTML = linkEffects.linkEffect7.css;
        break;
      }
      case "link8": {
        codeHTML.innerHTML = linkEffects.linkEffect8.html;
        codeCSS.innerHTML = linkEffects.linkEffect8.css;
        break;
      }
      case "link9": {
        codeHTML.innerHTML = linkEffects.linkEffect9.html;
        codeCSS.innerHTML = linkEffects.linkEffect9.css;
        break;
      }
      case "link10": {
        codeHTML.innerHTML = linkEffects.linkEffect10.html;
        codeCSS.innerHTML = linkEffects.linkEffect10.css;
        break;
      }
      case "link11": {
        codeHTML.innerHTML = linkEffects.linkEffect11.html;
        codeCSS.innerHTML = linkEffects.linkEffect11.css;
        break;
      }
      case "link12": {
        codeHTML.innerHTML = linkEffects.linkEffect12.html;
        codeCSS.innerHTML = linkEffects.linkEffect12.css;
        break;
      }
      case "link13": {
        codeHTML.innerHTML = linkEffects.linkEffect13.html;
        codeCSS.innerHTML = linkEffects.linkEffect13.css;
        break;
      }
      case "link14": {
        codeHTML.innerHTML = linkEffects.linkEffect14.html;
        codeCSS.innerHTML = linkEffects.linkEffect14.css;
        break;
      }
      case "link15": {
        codeHTML.innerHTML = linkEffects.linkEffect15.html;
        codeCSS.innerHTML = linkEffects.linkEffect15.css;
        break;
      }
      case "link16": {
        codeHTML.innerHTML = linkEffects.linkEffect16.html;
        codeCSS.innerHTML = linkEffects.linkEffect16.css;
        break;
      }
      case "link17": {
        codeHTML.innerHTML = linkEffects.linkEffect17.html;
        codeCSS.innerHTML = linkEffects.linkEffect17.css;
        break;
      }
      case "link18": {
        codeHTML.innerHTML = linkEffects.linkEffect18.html;
        codeCSS.innerHTML = linkEffects.linkEffect18.css;
        break;
      }
      case "link19": {
        codeHTML.innerHTML = linkEffects.linkEffect19.html;
        codeCSS.innerHTML = linkEffects.linkEffect19.css;
        break;
      }
      case "link20": {
        codeHTML.innerHTML = linkEffects.linkEffect20.html;
        codeCSS.innerHTML = linkEffects.linkEffect20.css;
        break;
      }
      case "link21": {
        codeHTML.innerHTML = linkEffects.linkEffect21.html;
        codeCSS.innerHTML = linkEffects.linkEffect21.css;
        break;
      }
      case "link22": {
        codeHTML.innerHTML = linkEffects.linkEffect22.html;
        codeCSS.innerHTML = linkEffects.linkEffect22.css;
        break;
      }
      case "link23": {
        codeHTML.innerHTML = linkEffects.linkEffect23.html;
        codeCSS.innerHTML = linkEffects.linkEffect23.css;
        break;
      }
      case "link24": {
        codeHTML.innerHTML = linkEffects.linkEffect24.html;
        codeCSS.innerHTML = linkEffects.linkEffect24.css;
        break;
      }
      case "link25": {
        codeHTML.innerHTML = linkEffects.linkEffect25.html;
        codeCSS.innerHTML = linkEffects.linkEffect25.css;
        break;
      }
      case "link26": {
        codeHTML.innerHTML = linkEffects.linkEffect26.html;
        codeCSS.innerHTML = linkEffects.linkEffect26.css;
        break;
      }
      case "link27": {
        codeHTML.innerHTML = linkEffects.linkEffect27.html;
        codeCSS.innerHTML = linkEffects.linkEffect27.css;
        break;
      }
      case "link28": {
        codeHTML.innerHTML = linkEffects.linkEffect28.html;
        codeCSS.innerHTML = linkEffects.linkEffect28.css;
        break;
      }
      default:
        return;
    }
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
                  <p
                    href="#"
                    className="linkEffect-1"
                    id="link1"
                    onClick={(e) => showCode(e.target)}
                    role="link"
                  >
                    Effect 1
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-2" role="link">
                    <span id="link2" onClick={(e) => showCode(e.target)}>
                      Effect 2
                    </span>
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-3"
                    id="link3"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 3
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-4"
                    id="link4"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 4
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-5"
                    id="link5"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 5
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-6">
                    <span id="link6" onClick={(e) => showCode(e.target)}>
                      Effect 6
                    </span>
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-7"
                    id="link7"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 7
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-8"
                    id="link8"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 8
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-9"
                    id="link9"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 9
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-10"
                    id="link10"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 10
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-11">
                    <span id="link11" onClick={(e) => showCode(e.target)}>
                      Effect-11
                    </span>
                    <svg
                      className="linkWave linkWave--slide"
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
                  <p href="#" className="linkEffect-12">
                    <span id="link12" onClick={(e) => showCode(e.target)}>
                      Effect 12
                    </span>
                    <svg
                      className="linkHalfWave linkHalfWave--stroke linkHalfWave--arc"
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
                    <span id="link13" onClick={(e) => showCode(e.target)}>
                      Effect 13
                    </span>
                  </p>
                </div>
                <div className="link">
                  <p
                    className="linkEffect-14"
                    id="link14"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 14
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-15"
                    id="link15"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 15
                  </p>
                </div>
              </div>
              <h4 className="my-4">Border effects</h4>
              <div className="borderLinks">
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-16"
                    id="link16"
                    onClick={(e) => showCode(e.target)}
                  >
                    <span>Effect 16</span>
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-17"
                    id="link17"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 17
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-18"
                    id="link18"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 18
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-19"
                    id="link19"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 19
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-20"
                    id="link20"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 20
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-21"
                    id="link21"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 21
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-22"
                    id="link22"
                    onClick={(e) => showCode(e.target)}
                  >
                    Effect 22
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-23"
                    data-hover="Effect 23"
                    id="link23"
                    onClick={(e) => showCode(e.target)}
                  >
                    <span>Effect 23</span>
                  </p>
                </div>
                <div className="link">
                  <p
                    href="#"
                    className="linkEffect-24"
                    data-hover="Effect 24"
                    id="link24"
                    onClick={(e) => showCode(e.target)}
                  >
                    <span>Effect 24</span>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-25">
                    <span id="link25" onClick={(e) => showCode(e.target)}>
                      Effect 25
                    </span>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-26">
                    <span id="link26" onClick={(e) => showCode(e.target)}>
                      Effect 26
                    </span>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-27">
                    <span id="link27" onClick={(e) => showCode(e.target)}>
                      Effect 27
                    </span>
                  </p>
                </div>
                <div className="link">
                  <p href="#" className="linkEffect-28">
                    <span id="link28" onClick={(e) => showCode(e.target)}>
                      Effect 28
                    </span>
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
