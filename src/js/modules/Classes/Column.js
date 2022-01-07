import Card from './Card';

class Column {
  constructor(id, title, cards = {}, boardId) {
    this.id = id;
    this.title = title;
    this.cards = cards;
    this.boardId = boardId;
    this.domElement = null;
  }

  init() {
    const obj = {};
    for (let key in this.cards) {
      let { id, title, desc, background, comments, checklists } = this.cards[key];
      obj[id] = new Card(id, title, this, desc, comments, checklists, background)
    }
    this.cards = obj;
  }

  addCard(id, title) {
    const card = new Card(id, title, this);
    if (!this.cards) {
      this.cards = {};
    }
    this.cards[id] = card;
    card.render();
  }

  removeCard(id) {
    delete this.cards[id];
  }

  getPath(id) {
    console.log(this.boardId);
    return `${this.boardId}/columns/${this.id}/cards/${id}`;
  }

  render() {
    const element = document.querySelector(".new__column");
    const column = document.createElement("div");
    this.domElement = column;
    column.classList.add("column");
    column.setAttribute("data-column-id", this.id);
    column.innerHTML = `
      <div class="column-header">
        <p>${this.title}</p>
        <span data-delete-column>&times;</span>
      </div>
      <div class="column-item-wrapper"></div>
      <div class="add-item new__card" data-add-card>
        <span>&plus;</span>
        <p>Добавить еще одну карточку</p>
      </div>
    `;

    for (let key in this.cards) {
      this.cards[key].render();
    }

    element.before(column);
  }
}

export default Column;