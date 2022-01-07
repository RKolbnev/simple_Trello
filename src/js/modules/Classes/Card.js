class Card {
  constructor(id, title, column, desc = null, comments = null, checklists = null, background = null) {
    this.id = id;
    this.title = title;
    this.column = column;
    this.desc = desc;
    this.background = background;
    this.comments = comments;
    this.checklists = checklists;
    this.domElement;
  }

  setTitle(value) {
    this.title = value;
  }

  addDesc(desc) {
    this.desc = desc;
  }

  addComment(comment) {
    if (!this.comments) {
      this.comments = {};
    }
    this.comments[comment.id] = comment;
  }

  removeComment(id) {
    delete this.comments[id];
    if (Object.keys(this.comments).length === 0) {
      this.comments = null;
    }

  }

  setBackground(color) {
    this.background = color;
  }

  addChecklist(id) {
    if (!this.checklists) {
      this.checklists = {};
    }
    this.checklists[id] = { id, title: "Чек-лист", tasks: {} };
  }

  removeChecklist(id) {
    delete this.checklists[id];
    if (Object.keys(this.checklists).length === 0) {
      this.checklists = null;
    }
  }

  addChecklistTask(id, body) {
    if (!this.checklists[id].tasks) {
      this.checklists[id].tasks = {};
    }
    this.checklists[id].tasks[body.id] = body;
  }

  removeChecklistTask(idChecklist, idTask) {
    delete this.checklists[idChecklist].tasks[idTask]
  }

  changeChecklistTitle(id, title) {
    this.checklists[id].title = title;
  }

  changeChecklistTask(id, idTask) {
    this.checklists[id].tasks[idTask].status = !this.checklists[id].tasks[idTask].status;
  }

  getPath() {
    return `${this.column.boardId}/columns/${this.column.id}/cards/${this.id}`;
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
      card.children[1].classList.add("column-item__bg");
      card.children[1].style.backgroundColor = this.background;
    }
    this.domElement = card;
    this.column.domElement.querySelector(".column-item-wrapper").append(card);
  }
}

export default Card;