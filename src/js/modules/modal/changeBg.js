import {patchReq} from '../../services/services';
import {link} from '../../index';

const changeBg = (target, card, place) => {
  if (target.hasAttribute('data-card-bg')) {
    if (place.parentElement.querySelector('.modal-bg-popup')) {
      return;
    }
    const columnBg = card.domElement.querySelector("[data-column-card-bg]");
    const modalBg = target === place ? target.closest(".modal").querySelector(".modal-close") : null;
    const modifyClass = target === place ? 'bg__modal' : 'bg__menu';
    place = place.parentElement;

    const bgComponent = document.createElement("div");
    bgComponent.classList.add("modal-bg-popup", modifyClass);
    bgComponent.innerHTML = `
      <p>Цвета</p>
      <div class="modal-bg-color">
        <span data-bg="red"></span>
        <span data-bg="blue"></span>
        <span data-bg="green"></span>
        <span data-bg="yellow"></span>
        <span data-bg="darkred"></span>
        <span data-bg="darkgreen"></span>
        <span data-bg="darkblue"></span>
        <span data-bg="darkgrey"></span>
      </div>
      <button data-delete-bg>Удалить обложку</button>
    `;

    bgComponent.addEventListener('click', (e) => {
      let color;

      if (e.target.hasAttribute('data-bg')) {
        color = getComputedStyle(e.target).backgroundColor;
        columnBg.classList.add("column-item__bg");
        columnBg.style.backgroundColor = color;
        card.setBackground(color);
        if (modalBg) {
          if (!modalBg.classList.contains("modal__bg")) {
            modalBg.classList.add("modal__bg");
          }
          modalBg.style.backgroundColor = color;
        }

      }

      if (e.target.hasAttribute('data-delete-bg')) {
        columnBg.classList.remove("column-item__bg");
        columnBg.style.backgroundColor = 'transparent';
        color = null;
        card.setBackground(null);
        if (modalBg) {
          modalBg.classList.remove("modal__bg");
          modalBg.style.backgroundColor = "transparent";
        }
      }
      if (!modalBg) {
        place.children[0].remove();
        place.prepend(card.domElement.cloneNode(true));
      }
      bgComponent.remove();
      patchReq(link, {background: color}, card.getPath());
    })
    place.append(bgComponent);
  }
};

export default changeBg;