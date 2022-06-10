import { ContentCopy, UploadFile } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import "./filter.css";

export default function Filter() {
  const [allValues, setAllValues] = useState({
    blur: 0,
    brightness: 1,
    contrast: 0,
    grayscale: 0,
    hueRotate: 0,
    invert: 0,
    opacity: 1,
    saturate: 1,
    sepia: 0,
  });

  const [selectedImg, setSelectedImg] = useState();

  function changeImg(ele) {
    setSelectedImg(ele.target.files[0]);
  }

  const submitHandler = () => {
    const formData = new FormData();

    formData.append("File", selectedImg);

    fetch(
      `https://api.imgbb.com/1/upload?key=f685bafd625e84373e6ee05b44531f01&`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  function changeEffect(elem) {
    const showEffect = document.querySelector(".showEffectImg");
    const code = document.querySelector("code");

    switch (elem.target.name) {
      case "blur":
        showEffect.style.filter = `blur(${allValues.blur}px)`;
        code.textContent = `filter: blur(${allValues.blur}px)`;
        break;
      case "brightness":
        showEffect.style.filter = `brightness(${allValues.brightness})`;
        code.textContent = `filter: brightness(${allValues.brightness})`;
        break;
      case "contrast":
        showEffect.style.filter = `contrast(${allValues.contrast})`;
        code.textContent = `filter: contrast(${allValues.contrast})`;
        break;
      case "grayscale":
        showEffect.style.filter = `grayscale(${allValues.grayscale})`;
        code.textContent = `filter: grayscale(${allValues.grayscale})`;
        break;
      case "hueRotate":
        showEffect.style.filter = `hue-rotate(${allValues.hueRotate}deg)`;
        code.textContent = `filter: hue-rotate(${allValues.hueRotate}deg)`;
        break;
      case "invert":
        showEffect.style.filter = `invert(${allValues.invert})`;
        code.textContent = `filter: invert(${allValues.invert})`;
        break;
      case "opacity":
        showEffect.style.filter = `opacity(${allValues.opacity})`;
        code.textContent = `filter: opacity(${allValues.opacity})`;
        break;
      case "saturate":
        showEffect.style.filter = `saturate(${allValues.saturate})`;
        code.textContent = `filter: saturate(${allValues.saturate})`;
        break;
      case "sepia":
        showEffect.style.filter = `sepia(${allValues.sepia})`;
        code.textContent = `filter: sepia(${allValues.sepia})`;
        break;

      default:
        return;
    }
  }

  return (
    <div className="wrapper">
      <div className="container filterContainer">
        <div className="row mt-5">
          <div className="filterInputs col-lg-6">
            <h2 className="mb-3">Filter Params</h2>
            <div className="filter blur">
              <label htmlFor="range">Blur</label>
              <div className="type Blur d-flex">
                <input
                  type="range"
                  name="blur"
                  id=""
                  min={0}
                  max={10}
                  value={allValues.blur}
                  step={0.1}
                  onChange={(e) => {
                    setAllValues({
                      ...allValues,
                      [e.target.name]: e.target.value,
                    });
                    changeEffect(e);
                  }}
                />
                <span className="showResult">{allValues.blur}px</span>
              </div>
            </div>
            <div className="filter brightness">
              <label htmlFor="range">brightness</label>
              <div className="type brightness d-flex">
                <input
                  type="range"
                  name="brightness"
                  id=""
                  min={0}
                  max={5}
                  value={allValues.brightness}
                  step={0.1}
                  onChange={(e) => {
                    setAllValues({
                      ...allValues,
                      [e.target.name]: e.target.value,
                    });
                    changeEffect(e);
                  }}
                />
                <span className="showResult">{allValues.brightness}</span>
              </div>
            </div>
            <div className="filter contrast">
              <label htmlFor="range">contrast</label>
              <div className="type contrast d-flex">
                <input
                  type="range"
                  name="contrast"
                  id=""
                  min={0}
                  max={10}
                  step={0.1}
                  value={allValues.contrast}
                  onChange={(e) => {
                    setAllValues({
                      ...allValues,
                      [e.target.name]: e.target.value,
                    });
                    changeEffect(e);
                  }}
                />
                <span className="showResult">{allValues.contrast}</span>
              </div>
            </div>
            <div className="filter grayscale">
              <label htmlFor="range">grayscale</label>
              <div className="type grayscale d-flex">
                <input
                  type="range"
                  name="grayscale"
                  id=""
                  min={0}
                  max={1}
                  step={0.1}
                  value={allValues.grayscale}
                  onChange={(e) => {
                    setAllValues({
                      ...allValues,
                      [e.target.name]: e.target.value,
                    });
                    changeEffect(e);
                  }}
                />
                <span className="showResult">{allValues.grayscale}</span>
              </div>
            </div>
            <div className="filter hue-rotate">
              <label htmlFor="range">hue-rotate</label>
              <div className="type hue-rotate d-flex">
                <input
                  type="range"
                  name="hueRotate"
                  id=""
                  min={0}
                  max={360}
                  step={1}
                  value={allValues.hueRotate}
                  onChange={(e) => {
                    setAllValues({
                      ...allValues,
                      [e.target.name]: e.target.value,
                    });
                    changeEffect(e);
                  }}
                />
                <span className="showResult">{allValues.hueRotate}deg</span>
              </div>
            </div>
            <div className="filter invert">
              <label htmlFor="range">invert</label>
              <div className="type invert d-flex">
                <input
                  type="range"
                  name="invert"
                  id=""
                  min={0}
                  max={1}
                  step={0.1}
                  value={allValues.invert}
                  onChange={(e) => {
                    setAllValues({
                      ...allValues,
                      [e.target.name]: e.target.value,
                    });
                    changeEffect(e);
                  }}
                />
                <span className="showResult">{allValues.invert}</span>
              </div>
            </div>
            <div className="filter opacity">
              <label htmlFor="range">opacity</label>
              <div className="type opacity d-flex">
                <input
                  type="range"
                  name="opacity"
                  id=""
                  min={0}
                  max={1}
                  step={0.1}
                  value={allValues.opacity}
                  onChange={(e) => {
                    setAllValues({
                      ...allValues,
                      [e.target.name]: e.target.value,
                    });
                    changeEffect(e);
                  }}
                />
                <span className="showResult">{allValues.opacity}</span>
              </div>
            </div>
            <div className="filter saturate">
              <label htmlFor="range">saturate</label>
              <div className="type saturate d-flex">
                <input
                  type="range"
                  name="saturate"
                  id=""
                  min={0}
                  max={10}
                  step={0.1}
                  value={allValues.saturate}
                  onChange={(e) => {
                    setAllValues({
                      ...allValues,
                      [e.target.name]: e.target.value,
                    });
                    changeEffect(e);
                  }}
                />
                <span className="showResult">{allValues.saturate}</span>
              </div>
            </div>
            <div className="filter sepia">
              <label htmlFor="range">sepia</label>
              <div className="type sepia d-flex">
                <input
                  type="range"
                  name="sepia"
                  id=""
                  min={0}
                  max={1}
                  step={0.1}
                  value={allValues.sepia}
                  onChange={(e) => {
                    setAllValues({
                      ...allValues,
                      [e.target.name]: e.target.value,
                    });
                    changeEffect(e);
                  }}
                />
                <span className="showResult">{allValues.sepia}</span>
              </div>
            </div>
          </div>
          <div className="preview col-lg-6 px-5">
            <h2 className="mb-3">Code</h2>
            <div className="showCode">
              <code>filter: blur({allValues.blur}px);</code>
              <ContentCopy
                className="copyIcon"
                titleAccess="copy"
                onClick={() =>
                  navigator.clipboard.writeText(
                    document.querySelector("code").textContent
                  )
                }
              />
            </div>
            <div className="showEffect">
              <h2 className="mb-3">Live Preview</h2>
              <div className="userImg d-flex justify-content-end mb-3">
                <label htmlFor="file">
                  Upload Picture
                  <UploadFile
                    style={{ marginLeft: "10px", fontSize: "50px" }}
                  />
                </label>
                <input
                  type="file"
                  name="imgFile"
                  id="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => changeImg(e)}
                />
              </div>
              <img
                src={require("../../../../assets/images/wallpaperflare.com_wallpaper (8).jpg")}
                alt=""
                className="showEffectImg mb-5"
              />
            </div>
            {/* <button className="btn btn-primary" onClick={submitHandler()}>
              Submit
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
