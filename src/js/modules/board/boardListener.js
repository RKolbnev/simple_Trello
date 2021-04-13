import addBoard from './addBoard'
import chooseBoard from './chooseBoard';
import removeBoard from './removeBoard';

const boardListener = () => {

  const boardsList = document.querySelector('.board-list-items');
  const btn = document.querySelector('.board-list');
  btn.addEventListener('click', () => {
    boardsList.classList.toggle('hide');
  })

  addBoard();
  removeBoard();
  chooseBoard();
};

export default boardListener;