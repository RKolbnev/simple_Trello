import {getData} from '../../services/services';
import Board from '../Classes/Board';
import {activeBoard, link} from '../../index';
import preloader from '../preloader';

const chooseBoard = () => {
  const header = document.querySelector('.header');
  header.addEventListener('click', (e) => {
    if (e.target.hasAttribute("data-board-title") || (e.target.hasAttribute("data-board-id") && e.target.closest('.board-list-items'))) {
      const newCurrentBoard = e.target.closest("[data-board-id]");
      const id = newCurrentBoard.getAttribute("data-board-id");
      localStorage.setItem("activeBoardID", id);
      const load = preloader(".main", "modal");
      getData(link, id)
      .then(({ id, title, columns }) => {
        load.remove();
        const board = new Board(id, title, columns);
        board.init();
        board.render();
        activeBoard.splice(0, 1, board);
      });
    }
  });
};

export default chooseBoard;