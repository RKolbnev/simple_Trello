import {getData} from '../../services/services';
import Board from '../Classes/Board';
import {activeBoard, link} from '../../index';

const chooseBoard = () => {
  const header = document.querySelector('.header');
  header.addEventListener('click', (e) => {
    if (e.target.hasAttribute("data-board-title") || (e.target.hasAttribute("data-board-id") && e.target.closest('.board-list-items'))) {
      const newCurrentBoard = e.target.closest("[data-board-id]");
      const currentBoard = header.querySelector(".board-current");
      currentBoard.textContent = newCurrentBoard.children[0].textContent;
      const id = newCurrentBoard.getAttribute("data-board-id");
      currentBoard.setAttribute("data-board-id", id);
      localStorage.setItem("activeBoardID", id);

      getData(link, id)
      .then(({ id, title, columns }) => {
        const board = new Board(id, title, columns);
        board.init();
        board.render();
        activeBoard.splice(0, 1, board);
      });
    }
  });
};

export default chooseBoard;