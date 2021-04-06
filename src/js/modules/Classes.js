class Column {
  constructor(title, id = Math.random(), cards = []) {
    this.id = id;
    this.title = title;
    this.cards = cards;
    this.domElement = null;
  }

  addCard(title, desc = null, comments = [], checklists = [], background = null, id = Math.random()) {
    const card = new Card(id, title, desc, comments, checklists, background, this);
    this.cards.push(card);
    card.render(id);
  }

  removeCard(id) {
    this.cards.forEach((card, i) => {
      card.id == id ? this.cards.splice(i, 1) : card;
    });
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

    if (this.cards.length > 0) {
      this.cards.forEach((card) => card.render());
    }
    element.before(column);
  }
}

class Card {
  constructor(id, title, desc, comments, checklists, background, column) {
    this.id = id
    this.title = title;
    this.desc = desc;
    this.comments = comments;
    this.checklists = checklists;
    this.background = background;
    this.column = column;
    this.domElement;
  }

  setTitle(value) {
    this.title = value;
  }

  addDesc(desc) {
    this.desc = desc;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeComment(value, date) {
    this.comments.forEach((comment, i) => {
      if (comment.value == value && comment.date == date) {
        this.comments.splice(i,1);
      }
    })
  }

  setBackground(color) {
    this.background = color;
  }

  addChecklist(id) {
    this.checklists.push({ id, title: "Чек-лист", tasks: [] });
  }

  removeChecklist(id) {
    this.checklists.forEach((item, i) => {
      if (item.id == id) {
        this.checklists.splice(i,1);
      }
    });
  }

  addChecklistTask(id, body) {
    this.checklists.forEach((item) => {
      if (+item.id === +id) {
        item.tasks.push(body);
      }
    });
  }

  removeChecklistTask(id, value) {
    this.checklists.forEach(item => {
      if (item.id == id) {
        item.tasks.forEach((task, i) => {
          if (task.value === value) {
            item.tasks.splice(i, 1);
          }
        });
      }
    })
  }

  changeChecklistTitle(id, title) {
    this.checklists.forEach((item) => {
      if (item.id == id) {
        item.title = title;
      }
    });
  }

  changeChecklistTask(id, value) {
    this.checklists.forEach((item) => {
      if (+item.id == +id) {
        item.tasks.forEach((task) => {
          if (task.value.trim() == value) {
            task.status = !task.status;
          }
        });
      }
    });
  }

  render() {
    const card = document.createElement("div");
    card.setAttribute("data-card-id", this.id);
    card.classList.add("column-item");
    card.innerHTML = `
      <div class="column-item-content">
        <div data-column-card-title> ${this.title}</div>
        <span class="column-item-menu">&equiv;</span>
      </div>
      <span data-column-card-bg></span>`;
    if (this.background) {
      card.children[1].classList.add('column-item__bg');
      card.children[1].style.backgroundColor = this.background;
    }
    this.domElement = card;
    this.column.domElement.querySelector(".column-item-wrapper").append(card);
  }
}


export {Column};