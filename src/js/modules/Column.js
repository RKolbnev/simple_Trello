class Column {
  constructor(title="Введите название") {
    this.title = title;
    this.cardsArray = {};
    this.length = 0;
    this.column = null;
  }

  addCard(title) {
    const newCard = new Card(title);
    this.cardsArray[`id${this.length}`] = newCard;
  }

  render(element) {
    const column = document.createElement("div");
    this.column = column;
    column.classList.add("column")
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

  renderCard(card) {
    const wrapper = this.column.querySelector(".column-item-wrapper");
    const newCard = document.createElement('div');
    newCard.classList.add('column-item');
    newCard.innerHTML = `<div class="column-item-title"> ${card.title}</div>`;

    wrapper.append(newCard)
  }
}

class Card {
  constructor(title, desc="Добавить более подробное описание...", comments) {
    this.title = title;
    this.desc = desc;
    this.comments = comments;
  }
}


export {Column}





        //<div class="column-item"> */}
          //<div class="column-item-title"> item</div> */}
        //</div>
