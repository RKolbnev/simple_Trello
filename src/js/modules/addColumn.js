import addInput from './addInput';
import {Column} from './Column';
import {store} from '../index';

const addColumn = () => {
  const elem = document.querySelector('.new__column');
  elem.addEventListener('click', () => {
    const callback = (value) => {
      const newColumn = new Column(value);
      store[newColumn.id] = newColumn;
      newColumn.render(elem);
    }
    addInput(elem, 'Введите заголовок списка', callback, 'input-add__column');
  })
}

export default addColumn;