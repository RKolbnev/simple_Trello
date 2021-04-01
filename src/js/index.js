import addColumn from './modules/addColumn';
import addCard from './modules/addCard';
import removeColumn from './modules/removeColumn';
import openModal from './modules/openModal';
import createModal from './modules/modal/createModal';
import createMenu from './modules/menu/createMenu';

const link = "http://simple-trello-a0138-default-rtdb.firebaseio.com/column.json";

const store = {};

window.addEventListener("DOMContentLoaded", () => {
  addColumn();
  removeColumn();
  addCard();
  openModal("column-item-content", createModal, "column-item-menu");
  openModal("column-item-menu", createMenu, "column-item-content");






});

export { link, store };
