import menuListener from './menuListener';

const createMenu = (card) => {
  const modal = document.createElement("div");
  modal.classList.add("modal-menu");
  modal.setAttribute('data-modal-close', true);
  modal.innerHTML = `
    <div class="modal-menu-content">
      <div class="modal-menu-card"></div>
      <div class="modal-menu-wrap">
        <button>Открыть карточку</button>
        <button data-card-title>Изменить название</button>
        <button data-card-desc>Добавить описание</button>
        <button data-card-bg>Сменить обложку</button>
        <button>Удалить карточку</button>
      </div>
    </div>
  `;
  const coords = card.domElement.getBoundingClientRect();
  modal.children[0].style.marginTop = coords.top + "px";
  modal.children[0].style.marginLeft = coords.left + "px";
  modal
    .querySelector(".modal-menu-card")
    .append(card.domElement.cloneNode(true));
  menuListener(modal, card);
  return modal;
};

export default createMenu;
