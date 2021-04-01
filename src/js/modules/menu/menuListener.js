import addInput from '../addInput';

const menuListener = (modal, card, cardElem, column) => {
  modal.addEventListener('click', (e) => {
    closeMenu(e, modal);
    removeCard(e.target, modal, cardElem, column);
    openCard(e.target, modal, cardElem);
    changeCardTitle(e.target, cardElem, card);
    changeDesc(e.target, card);



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
//? Закрытие меню
function closeMenu(event, modal) {
  if (event.target.classList.contains('modal-menu')) {
    event.stopPropagation();
    modal.remove();
  }
}

//? Октрыть карточку
function openCard(target, modal, cardElem) {
  if (target.textContent === 'Открыть карточку') {
    modal.remove();
    cardElem.children[0].click();
  }
}

//? Изменить название карточки
function changeCardTitle(target, cardElem, card) {
  if (target.textContent === 'Изменить название') {
    const textElem = cardElem.querySelector('.column-item-content').children[0];
    const inputPlace = target.parentElement.previousElementSibling.children[0];
    inputPlace.style.display = 'none';
    const callback = (value) => {
      textElem.textContent = value;
      card.changeTitle(value);
      const parent = inputPlace.parentElement;
      parent.textContent = '';
      parent.append(cardElem.cloneNode(true));
    }

    addInput(inputPlace, textElem.textContent, callback, "input-add__menu");
  }
}

//? Изменить описание карточки
function changeDesc(target, card) {
  if (target.textContent === 'Добавить описание') {
    const inputPlace = target.parentElement.previousElementSibling.children[0];
    inputPlace.style.display = 'none';
    const callback = (value) => {
      card.addDesc(value);
    }

    addInput(inputPlace, card.desc, callback, "input-add__menu");
  }
}



export default menuListener;