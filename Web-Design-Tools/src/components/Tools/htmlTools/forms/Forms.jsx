import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "./form.css";
import { ContentCopy } from "@mui/icons-material";

export default function Forms() {
  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={require("../../../../assets/images/wallpaperflare.com_wallpaper (8).jpg")}
          alt=""
        />
      </SwiperSlide>
    );
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
      <div className="formsContainer">
        <div className="container">
          <div className="row">
            <Swiper
              className="col-lg-8"
              id="main"
              spaceBetween={10}
              slidesPerView={1}
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
              }}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
            >
              {/* {slides} */}
              <SwiperSlide className="form-1" key={"form-1"}>
                <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
                  <div class="wrapper wrapper--w960">
                    <div class="card card-2">
                      <div class="card-heading"></div>
                      <div class="card-body">
                        <h2 class="title">Registration Info</h2>
                        <form method="POST">
                          <div class="input-group">
                            <input
                              class="input--style-2"
                              type="text"
                              placeholder="Name"
                              name="name"
                            />
                          </div>
                          <div class="row row-space">
                            <div class="col-12">
                              <div class="input-group">
                                <input
                                  class="input--style-2 js-datepicker"
                                  type="text"
                                  placeholder="Birthdate"
                                  name="birthday"
                                />
                                <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="input-group">
                                <div class="rs-select2 js-select-simple select--no-search">
                                  <select name="gender form-control">
                                    <option
                                      disabled="disabled"
                                      selected="selected"
                                    >
                                      Gender
                                    </option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                  </select>
                                  <div class="select-dropdown"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="input-group">
                            <div class="rs-select2 js-select-simple select--no-search">
                              <select name="class form-control">
                                <option disabled="disabled" selected="selected">
                                  Class
                                </option>
                                <option>Class 1</option>
                                <option>Class 2</option>
                                <option>Class 3</option>
                              </select>
                              <div class="select-dropdown"></div>
                            </div>
                          </div>
                          <div class="row row-space">
                            <div class="col-12">
                              <div class="input-group">
                                <input
                                  class="input--style-2"
                                  type="text"
                                  placeholder="Registration Code"
                                  name="res_code"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="p-t-30">
                            <button
                              class="btn btn--radius btn--green"
                              type="submit"
                            >
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* <div className="viewCodeContainer col-lg-4">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
