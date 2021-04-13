import {deleteData} from '../../services/services';
import {activeBoard, link} from '../../index';

const removeColumn = () => {
  const main = document.querySelector('.main');
  main.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-delete-column')) {
      const idColumn = e.target
        .closest("[data-column-id]")
        .getAttribute("data-column-id");
      const idBoard = document
        .querySelector('.board-current')
        .getAttribute('data-board-id');
      e.target.parentElement.parentElement.remove();
      activeBoard[0].removeColumn(idColumn);
      const path = activeBoard[0].getPath(idColumn);
      console.log(path);
      deleteData(link, path);
    }
  })
}

export default removeColumn;