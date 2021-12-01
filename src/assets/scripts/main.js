/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import * as bootstrap from '../../../node_modules/bootstrap';

// import 'some-node-module';
// import SomeModule from 'some-node-module';
// core version + navigation, pagination modules:

import Swiper, { Navigation, Pagination } from "../../../node_modules/swiper";
import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/swiper.scss";
import "../../../node_modules/swiper/swiper-vars.scss";

Swiper.use([Navigation, Pagination]);

/**
 * Write any other JavaScript below
 */

+(function () {
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };

  function onScroll() {
    let infoPlayImage = document.querySelector(".image__animation");
    if (infoPlayImage) {
      infoPlayImage.style.transform = `matrix(1,0,0,1,0,${calculateTransform(
        0,
        40
      )})`;
    }
  }

  function calculateTransform(y1, y2, max) {
    let scrollDist = document.querySelector("body");
    let scrollDistV = scrollDist.getBoundingClientRect();
    let calc = y1 + (Math.abs(scrollDistV.top) * y2) / (scrollDistV.height / 2);
    return calc;
  }


  window.addEventListener("load", () => {

    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      centeredSlides: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        820: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      pagination: {
        el: ".swiper-pagination",
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    let showSchedule = false;
    let btnClick = false;
    window.addEventListener("scroll", onScroll);
    const deviceType = getDeviceType();
    const btnPortada = document.querySelector(".portada__info-btn");
    let portadaEl = document.querySelector(".portada");
    if (deviceType === "mobile") {
      portadaEl.classList.add("mobile");
    }
    if (btnPortada) {
      if (deviceType !== "mobile") {
        btnPortada.addEventListener("mouseenter", () => {
          if (!btnClick) {
            showSchedule = true;
            toggleShowSchedule();
          }
        });
        btnPortada.addEventListener("mouseleave", () => {
          if (!btnClick) {
            showSchedule = false;
            toggleShowSchedule();
          }
        });
      }
      btnPortada.addEventListener("click", (e) => {
        e.stopPropagation();
        btnClick = !btnClick;
        showSchedule = btnClick;
        toggleShowSchedule();
      });
    }
    function toggleShowSchedule() {
      if (showSchedule) {
        portadaEl.classList.add("show-schedule");
      } else {
        portadaEl.classList.remove("show-schedule");
      }
    }
    const contactContainer = document.querySelector(".contact__container");

    if (contactContainer) {
      document.querySelector("#go-left").addEventListener("click", () => {
        contactContainer.classList.toggle("right-side-active");
      });
      document.querySelector("#go-right").addEventListener("click", () => {
        contactContainer.classList.toggle("right-side-active");
      });
    }
  });
})();
