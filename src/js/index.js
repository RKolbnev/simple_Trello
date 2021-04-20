import createModal from './modules/cardModal/createModal';
import createMenu from './modules/cardMenu/createMenu';

import loadResourses from './modules/loadResourses';
import allClose from './modules/allClose';
import boardListener from './modules/board/boardListener';
import columnListener from './modules/column/columnListener';
import openModal from './modules/modal/openModal';
import search from './modules/search';

const link = "http://simpletrello-88eaf-default-rtdb.firebaseio.com/trello.json";

let activeBoard = [];
loadResourses(link);


window.addEventListener("DOMContentLoaded", () => {
  allClose();
  boardListener();
  columnListener();
  search();
  openModal("column-item-content", createModal, "column-item-menu");
  openModal("column-item-menu", createMenu, "column-item-content");
});

export { link, activeBoard };
