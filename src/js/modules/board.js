import addInput from './addInput';
import {postData} from '../services/services';

const board = (link) => {
  const header = document.querySelector('.header');
  header.addEventListener('click', (e) => {
    if (e.target.classList.contains('board-list')) {
      e.target.nextElementSibling.classList.toggle('hide');
    }
    if (e.target.classList.contains('board-add')) {
      const callback = (value) => {
        const board = document.createElement('p');
        board.textContent = value;
        e.target.before(board);
        e.target.style.display = '';
        const newBoard = {
          title: value,
          columns: {}
        }
        postData(link, board);
      }
      e.target.style.display = 'none';
      addInput(e.target, "Введите название", callback, 'input-add__board');
    }
  })
}

export default board;