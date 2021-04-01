import menuListener from './menuListener';

const createMenu = (card, cardElem, column) => {
  const modal = document.createElement("div");

  modal.classList.add("modal-menu");
  modal.innerHTML = `
    <div class="modal-menu-content">
      <div class="modal-menu-card"></div>
      <div class="modal-menu-wrap">
        <button>Открыть карточку</button>
        <button>Изменить название</button>
        <button>Добавить описание</button>
        <button>Сменить обложку</button>
        <button>Удалить карточку</button>
      </div>
    </div>
  `;

  const currentCard = modal.querySelector(".modal-menu-card");
  const coords = cardElem.getBoundingClientRect();
  modal.children[0].style.marginTop = coords.top + "px";
  modal.children[0].style.marginLeft = coords.left + "px";
  currentCard.append(cardElem.cloneNode(true));

  menuListener(modal, card, cardElem, column);
  return modal;
};

export default createMenu;
