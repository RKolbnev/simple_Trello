import {store} from '../index';
import addInput from './addInput';

const openCardMenu = () => {
  const main = document.querySelector(".main");

  main.addEventListener("click", (e) => {

    if (e.target.classList.contains("column-item-menu")) {
      const column = e.target.closest("[data-column-id]");
      const idColumn = column.getAttribute("data-column-id");
      const cardElem = e.target.closest("[data-card-id]");
      const idCard = cardElem.getAttribute("data-card-id");
      const card = store[idColumn].cards[idCard];
      const modal = document.createElement('div');
      modal.classList.add('modal-menu');
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

      const elem = modal.querySelector('.modal-menu-card');
      const height = cardElem.clientHeight;
      const width = cardElem.clientWidth;
      elem.style.width = width + 'px';
      elem.style.height = height + 'px';
      const coords = cardElem.getBoundingClientRect();

      modal.children[0].style.marginTop = coords.top + 'px';
      modal.children[0].style.marginLeft = coords.left + 'px';

      elem.append(cardElem.cloneNode(true));
      main.append(modal);
    }
    // Закрытие меню
    if (document.querySelector('.modal-menu') && e.target.classList.contains('modal-menu')) {
      e.target.remove();
    }

    if (e.target.textContent === 'Открыть карточку') {
      const menuCard = e.target.parentElement.previousElementSibling;
      const callback = (value) => {
        menuCard.children[0].children[0].children[0].textContent = value;
        menuCard.style.display = '';
      }
      menuCard.style.display = 'none'
      addInput(menuCard, '', callback, 'input-add__menu');

    }
  });
};

export default openCardMenu;