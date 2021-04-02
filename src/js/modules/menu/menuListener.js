import addInput from '../addInput';

const menuListener = (modal, card, cardElem, column) => {
  modal.addEventListener('click', (e) => {
    closeMenu(e, modal);
    removeCard(e.target, modal, cardElem, column);
    openCard(e.target, modal, cardElem);
    changeCardTitle(e.target, cardElem, card);
    changeDesc(e.target, card);
    changeBg(e.target, cardElem, card);
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
//? Изменить фон карточки
function changeBg(target, cardElem, card) {
  if (target.textContent === "Сменить обложку") {

    const place = target.parentElement.previousElementSibling;
    const bg = cardElem.querySelector("[data-column-bg]");

    const bgComponent = document.createElement("div");
    bgComponent.classList.add('modal-bg-popup');
    bgComponent.style.marginTop = '10px';
    bgComponent.innerHTML = `
      <p>Цвета</p>
      <div class="modal-bg-color">
        <span data-modal-bg="modal__bg-red"></span>
        <span data-modal-bg="modal__bg-blue"></span>
        <span data-modal-bg="modal__bg-green"></span>
        <span data-modal-bg="modal__bg-yellow"></span>
        <span data-modal-bg="modal__bg-darkred"></span>
        <span data-modal-bg="modal__bg-darkgreen"></span>
        <span data-modal-bg="modal__bg-darkblue"></span>
        <span data-modal-bg="modal__bg-darkgrey"></span>
      </div>
      <button data-delete-bg>Удалить обложку</button>
    `;

    bgComponent.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-modal-bg')) {
        const color = getComputedStyle(e.target).backgroundColor;
        bg.classList.add('column-item__bg');
        bg.style.backgroundColor = color;
        place.children[0].remove();
        place.prepend(cardElem.cloneNode(true));
        card.addBackground(color);
        bgComponent.remove();
      }

      if (e.target.hasAttribute('data-delete-bg')) {
        bg.classList.remove('column-item__bg');
        bg.style.backgroundColor = 'transparent';
        card.addBackground(null);
        place.children[0].remove();
        place.prepend(cardElem.cloneNode(true));
        bgComponent.remove();
      }
    })


    place.append(bgComponent);
  }
}


export default menuListener;