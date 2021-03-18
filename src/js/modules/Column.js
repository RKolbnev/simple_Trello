class Column {
  constructor({title="Введите название", id=null} = {}) {
    this.id = id;
    this.title = title;
    this.cards = {};
    this.length = 0;
    this.elemDOM = null;
  }

  addCard(title) {
    const newCard = new Card(title);
    this.cards[`id${this.length}`] = newCard;
    this.length += 1;

    const wrapper = this.elemDOM.querySelector(".column-item-wrapper");
    const card = document.createElement("div");
    card.setAttribute('data-card-id', `id${this.length-1}`)
    card.classList.add("column-item");
    card.innerHTML = `<div class="column-item-title"> ${title}</div>`;

    wrapper.append(card);
  }

  render(element) {
    const column = document.createElement("div");
    this.elemDOM = column;
    column.classList.add("column")
    column.setAttribute('data-column-id', this.id)
    column.innerHTML = `
      <div class="column-header">
        <p>${this.title}</p>
        <span data-delete>&times;</span>
      </div>
      <div class="column-item-wrapper"></div>
      <div class="column-add" data-add-card>
        <span>&plus;</span>
        <p>Добавить еще одну карточку</p>
      </div>
    `;

    element.before(column);
  }
}

class Card {
  constructor(title, desc="Добавить более подробное описание...") {
    this.title = title;
    this.desc = desc;
    this.comments = [];
  }

  addDesc(desc) {
    this.desc = desc;
  }

  addComment(text) {
    this.comments.push(text);
  }

  openModal() {
    const elem = document.createElement('div');
    elem.classList.add('card-modal');
    elem.innerHTML = `

    `
  }

}


export {Column};