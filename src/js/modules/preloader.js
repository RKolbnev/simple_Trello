const preloader = (selector, className) => {
  const modal = document.createElement("div");
  modal.classList.add(className);
  modal.innerHTML = `
    <div id="fountainG" class="modal-preload">
      <div id="fountainG_1" class="fountainG"></div>
      <div id="fountainG_2" class="fountainG"></div>
      <div id="fountainG_3" class="fountainG"></div>
      <div id="fountainG_4" class="fountainG"></div>
      <div id="fountainG_5" class="fountainG"></div>
      <div id="fountainG_6" class="fountainG"></div>
      <div id="fountainG_7" class="fountainG"></div>
      <div id="fountainG_8" class="fountainG"></div>
    </div>
  `;
  const elem = document.querySelector(selector);
  elem.classList.remove('hide');
  elem.append(modal);
  return modal;
};
export default preloader;
