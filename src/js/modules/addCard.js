import addInput from './addInput';
import {store} from '../index';

const addCard = () => {
  const main = document.querySelector('.main');
  main.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('new__card')) {
      const callback = (value) => {
        const id = e.target.parentElement.parentElement.getAttribute("data-column-id");
        const column = store[id];
        column.addCard(value);
      }

      e.target.parentElement.style.display = 'none';
      addInput(e.target.parentElement, 'Введите заголовок карточки', callback, 'card');
    }
  })
}

export default addCard;
