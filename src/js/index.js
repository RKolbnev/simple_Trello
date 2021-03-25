import addColumn from './modules/addColumn';
import addCard from './modules/addCard';
import removeColumn from './modules/removeColumn';
import {openCard} from './modules/openCard';

const link = "http://simple-trello-a0138-default-rtdb.firebaseio.com/column.json";

const store = {};

window.addEventListener("DOMContentLoaded", () => {
  addColumn();
  removeColumn();
  addCard();
  openCard()







});

export { link, store };
