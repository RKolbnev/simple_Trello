import addInput from '../addInput';
import { patchReq } from '../../services/services';
import {activeBoard, link} from '../../index';
import idGenerate from '../idGenerate';

const addCard = () => {
  const main = document.querySelector('.main');
  main.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    if (parent.classList.contains('new__card')) {
      parent.style.display = 'none';
      addInput(parent, 'Введите заголовок карточки', 'card', false, (value) => {
        const idColumn = e.target
          .closest('[data-column-id]')
          .getAttribute('data-column-id');
        const column = activeBoard[0].columns[idColumn]
        const id = idGenerate();
        const body = {id, title: value, desc: null, comments: null, checklists: null, background: null }
        column.addCard(body.id, body.title);
        patchReq(link, body, column.getPath(id));
      });
    }
  })
}


export default addCard;