class Board {
  constructor() {}

  render(parent) {
    const board = document.createElement("div");
    board.classList.add("board");
    board.innerHTML = `
      <div class="board-header">
        <p>Title</p>
        <span data-delete>&times;</span>
      </div>

      <div class="board-item-wrapper">
        <div class="board-item">
          <div class="board-item-title"> Item</div>
        </div>
      </div>

      <div class="board-add">
        <span>&plus;</span>
        <p>Добавить еще одну карточку</p>
      </div>
    `;

    parent.append(board);
  }
}

class BoardItem {
  constructor() {}
}


export {Board};