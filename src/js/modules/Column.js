class Column {
  constructor(title="Введите название", id = Math.random(), card = {}, length = 0) {
    this.id = id;
    this.title = title;
    this.cards = card;
    this.length = length;
    this.elemDOM = null;
  }

  addCard(title) {
    const newCard = new Card(title);
    this.cards[`id${this.length}`] = newCard;
    const id = `id${this.length}`;
    this.length += 1;
    const wrapper = this.elemDOM.querySelector(".column-item-wrapper");
    wrapper.append(newCard.render(title, id));
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
      <div class="add-item new__card" data-add-card>
        <span>&plus;</span>
        <p>Добавить еще одну карточку</p>
      </div>
    `;
    if (this.length > 0) {
      const wrap = column.querySelector('column-item-wrapper');
      for (let [key, value] of Object.entries(this.cards)) {
        wrap.append(value.render(value.title, key));
      }
    }

    element.before(column);
  }
}

class Card {
  constructor(title, desc = null, comments = [], checkList = [], background = null) {
    this.title = title;
    this.desc = desc;
    this.comments = comments;
    this.checkList = checkList;
    this.background = background;
  }

  addDesc(desc) {
    this.desc = desc;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  addBackground(color) {
    this.background = color;
  }

  render(title,id) {
    const card = document.createElement('div');
    card.setAttribute("data-card-id", `${id}`);
    card.classList.add("column-item");
    card.innerHTML = `<div class="column-item-title"> ${title}</div>`;
    if (this.background) {
      card.style.background = this.background;
    }
    return card;
  }
}


export {Column};