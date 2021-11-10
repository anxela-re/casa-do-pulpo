/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const btnPortada = document.querySelector(".portada__info-btn");
  let showSchedule = false;
  let btnClick = false;
  let portadaEl = document.querySelector('.portada');
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
  btnPortada.addEventListener("click", () => {
    btnClick = !btnClick;
    showSchedule = btnClick;
    toggleShowSchedule();
  });

  function toggleShowSchedule() {
    if (showSchedule) {
      portadaEl.classList.add('show-schedule');
    } else {
      portadaEl.classList.remove('show-schedule')
    }
  }
})();
