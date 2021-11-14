/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
// import * as bootstrap from '../../../node_modules/bootstrap';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
// import 'swiper/';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// swiper bundle styles
import '../../../node_modules/swiper/swiper-bundle.css';
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/swiper-vars.scss';
// swiper core styles
// import "swiper/css";

// modules styles
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

/**
 * Write any other JavaScript below
 */

+(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // slidesPerView: 1,
    // spaceBetween: 10,
    // Responsive breakpoints
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });

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
        50
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
  });
})();
