import Column from './Column';
import {deleteData} from '../../services/services';

class Board {
  constructor(id, title, columns = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
  init() {
    const obj = {}
    for (let key in this.columns) {
      let { id, title, cards } = this.columns[key];
      const column = new Column(id, title, cards, this.id);
      column.init();
      obj[id] = column
    }
    this.columns = obj;
  }

  addColumn(id, title) {
    const column = new Column(id, title, null, this.id);
    this.columns[id] = column;
    column.render();
  }

  removeColumn(id) {
    delete this.columns[id]
  }

  getPath(id) {
    return `${this.id}/columns/${id}`;
  }

  render() {
    try {
      document.querySelectorAll('[data-column-id]').forEach(item => item.remove())
    } catch(e) {}
    const currentBoard = document.querySelector('.board-current');
    currentBoard.textContent = this.title;
    currentBoard.setAttribute('data-board-id', this.id);
    for (let key in this.columns) {
      this.columns[key].render();
    }
  }
};

export default Board;