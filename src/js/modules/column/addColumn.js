import addInput from '../addInput';
import { link, activeBoard } from "../../index";
import { patchReq } from '../../services/services';
import idGenerate from '../idGenerate';

const addColumn = () => {
  const elem = document.querySelector('.new__column');
  elem.addEventListener('click', () => {
    addInput(elem, 'Введите заголовок списка', 'input-add__column', false, (value) => {
      const body = {id: idGenerate(), title: value}
      const board = activeBoard[0];

      board.addColumn(body.id, body.title);
      patchReq(link, body, board.getPath(body.id));
    });
  })
}

export default addColumn;