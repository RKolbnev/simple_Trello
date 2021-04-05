import closeModal from '../modal/closeModal';
import changeDesc from '../modal/changeDesc';
import changeTitle from '../modal/changeTitle';

import changeBg from '../modal/changeBg';

const menuListener = (modal, card, cardElem, column) => {
  modal.addEventListener('click', (e) => {
    const place = modal.querySelector('.modal-menu-card').children[0];

    closeModal(e, modal);
    changeTitle(e.target, card, cardElem, place);
    changeDesc(e.target, card, place);
    changeBg(e.target, card, cardElem, place);
    removeCard(e.target, modal, cardElem, column);
    openCard(e.target, modal, cardElem);
  })
}

//? Удаление карточки
function removeCard(target, modal, cardElem, column) {
  if (target.textContent === 'Удалить карточку') {
    cardElem.remove();
    modal.remove();
    column.removeCard(cardElem.getAttribute('data-card-id'));
  }
}

//? Октрыть карточку
function openCard(target, modal, cardElem) {
  if (target.textContent === 'Открыть карточку') {
    modal.remove();
    cardElem.children[0].click();
  }
}

export default menuListener;