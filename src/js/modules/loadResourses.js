import {getData} from '../services/services';
import {activeBoard} from '../index';
import Board from './Classes/Board';
import welcomeModal from './welcomeModal/welcomeModal';

const loadResourses = (link) => {
  const idLastActive = localStorage.getItem('activeBoardID');

    getData(link)
      .then((data) => {
        if (!data) {
          return welcomeModal();
        }
        for (let key in data) {
          const {id, title, columns} = data[key];

          const boardList = document.querySelector('.board-list-items');
          const boardElem = document.createElement('div');
          boardElem.classList.add("board-item");
          boardElem.setAttribute("data-board-id", id);
          boardElem.innerHTML = `
          <p data-board-title>${title}</p>
            <button data-delete-board>Удалить</button>
          `;
          boardList.prepend(boardElem);

          const board = new Board(id, title , columns);
          board.init()
          if (id === idLastActive) {
            board.render();
            activeBoard.push(board);
          }
        }
      });
}

export default loadResourses;