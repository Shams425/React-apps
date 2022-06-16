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
      <div className="container">
        <div className="row">
          <Swiper
            className="col-lg-12"
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
            <SwiperSlide key="slide1">
              <img
                src={require("../../../../assets/images/regeist 1.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide key="slide2">
              <img
                src={require("../../../../assets/images/regesit 2.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide key="slide1">
              <img
                src={require("../../../../assets/images/sign in.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide key="slide2">
              <img
                src={require("../../../../assets/images/sign up.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide key="slide2">
              <img
                src={require("../../../../assets/images/contact.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide key="slide2">
              <img
                src={require("../../../../assets/images/contact2.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide key="slide2">
              <img
                src={require("../../../../assets/images/contact3.png")}
                alt=""
              />
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
  );
}
