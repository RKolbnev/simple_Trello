import addInput from './addInput';
import {Column} from './Classes';
import {store, link} from '../index';

const addColumn = () => {
  const elem = document.querySelector('.new__column');
  elem.addEventListener('click', () => {
    const callback = (value) => {
      const column = new Column(value);
      store[column.id] = column;
      column.render();
    }
    addInput(elem, 'Введите заголовок списка', callback, 'input-add__column');
  })
}

export default addColumn;