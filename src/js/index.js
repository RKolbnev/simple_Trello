import addColumn from './modules/addColumn';
import addCard from './modules/addCard';
import removeColumn from './modules/removeColumn';
import openModal from './modules/openModal';

const link = "http://simple-trello-a0138-default-rtdb.firebaseio.com/column.json";

const store = {};

window.addEventListener("DOMContentLoaded", () => {
  addColumn();
  removeColumn();
  addCard();
  openModal();







});

export { link, store };
