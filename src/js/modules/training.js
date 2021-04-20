import columnListener from "./column/columnListener";

async function training() {
  const main = document.querySelector('.main');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = '<div class="training"></div>'
  const guide = modal.querySelector('div');
  modal.style.zIndex = 100;
  main.append(modal);

  const boardList = document.querySelector('.board-list-items');
  const btnBoardList = document.querySelector('.board-list');
  const addBoard = document.querySelector('.board-add');
  btnBoardList.click();
  addBoard.click();
  boardList.style.zIndex = 101;
  btnBoardList.style.zIndex = 101;

  const inputAdd = document.querySelector(".input-add");
  const btnAdd = inputAdd.querySelector(".btn");
  console.log(btnAdd);
  btnAdd.addEventListener('click', () => {
    console.log(boardList, btnBoardList);
    boardList.style = '';
    btnBoardList.style = '';

    document.querySelector('.new__column').click();
    const inputAdd = document.querySelector(".input-add");
    inputAdd.style.zIndex = 101;
    const btnAdd = inputAdd.querySelector(".btn");

    btnAdd.addEventListener('click', () => {
      const column = document.querySelector('[data-column-id]');
      column.style.zIndex = 101;

    })

  })
}

export default training;