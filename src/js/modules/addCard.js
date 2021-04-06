import addInput from './addInput';
import {store} from '../index';

const addCard = () => {
  const main = document.querySelector('.main');
  main.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    if (parent.classList.contains('new__card')) {
      const callback = (value) => {
        const id = parent
          .closest("[data-column-id]")
          .getAttribute("data-column-id");
        const column = store[id];
        column.addCard(value);
      }

      parent.style.display = 'none';
      addInput(parent, 'Введите заголовок карточки', callback, 'card');
    }
  })
}

export default addCard;
