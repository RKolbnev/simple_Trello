import addInput from '../addInput';
import idGenerate from '../idGenerate';
import {patchReq} from '../../services/services';
import {activeBoard, link} from '../../index';
import Board from '../Classes/Board';

const addBoard = () => {
  const btn = document.querySelector('.board-add');
  btn.addEventListener('click', () => {
    btn.style.display = 'none';
    addInput(btn, 'Введите название доски', 'input-add__board', false, (value) => {
      const board = document.createElement('div');
      board.classList.add("board-item");
      const id = idGenerate();
      board.setAttribute("data-board-id", id);
      board.innerHTML = `
        <p data-board-title>${value}</p>
        <button data-delete-board>Удалить</button>
      `;
      btn.before(board);
      btn.style.display = "";

      const currentBoard = document.querySelector('.board-current');
      currentBoard.textContent = value;
      currentBoard.setAttribute("data-board-id", id);

      localStorage.setItem("activeBoardID", id);
      const data = { id: id, title: value, columns: {} };
      const boardObj = new Board(data.id, data.title);
      boardObj.render();
      activeBoard.splice(0, 1, boardObj);
      patchReq(link, data, id);

      btn.closest('.board-list-items').classList.add('hide');
    });
  });
};

export default addBoard;