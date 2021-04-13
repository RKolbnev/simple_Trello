import {deleteData, getData} from '../../services/services';
import Board from '../Classes/Board';
import { activeBoard, link } from '../../index';

const removeBoard = () => {
  const header = document.querySelector('.header');
  header.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-delete-board')) {
      const board = e.target.closest('[data-board-id]');
      const id = board.getAttribute('data-board-id');
      const currentBoard = document.querySelector(".board-current");
      const idCurrent = currentBoard.getAttribute('data-board-id');
      board.remove();
      if (id === idCurrent) {
        try{
          const boardsList = document.querySelector('.board-list-items').children[0];
          const newCurrentBoard = boardsList.querySelector('[data-board-title]')
          const title = newCurrentBoard.textContent;
          const id = newCurrentBoard.closest('[data-board-id]').getAttribute('data-board-id')
          currentBoard.textContent = title;
          currentBoard.setAttribute('data-board-id', id);
          localStorage.setItem("activeBoardID", id);
          getData(link, id)
          .then(({id, title, columns}) => {
            const board = new Board(id, title, columns);
            board.init();
            board.render();
            activeBoard.splice(0, 1, board);
          })

        } catch(e) {
          currentBoard.textContent = 'Создайте первую доску';
          localStorage.removeItem("activeBoardID");
          document.querySelectorAll('[data-column-id]').forEach(column => column.remove())
        }
      }
      deleteData(link, id);
    }
  })
};


export default removeBoard;