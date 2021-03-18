import { addColumn, addCard } from "./modules/addItem";
import { openCard } from "./modules/openCard";
import deleteColumn from "./modules/deleteColumn";

const link = "http://simple-trello-a0138-default-rtdb.firebaseio.com/column.json";

const store = {};

window.addEventListener("DOMContentLoaded", () => {
  addColumn("new__column", {});
  addCard();
  deleteColumn();
  openCard();








});

export { link, store };
