import createModal from './modules/cardModal/createModal';
import createMenu from './modules/cardMenu/createMenu';

import loadResourses from './modules/loadResourses';
import boardListener from './modules/board/boardListener';
import columnListener from './modules/column/columnListener';
import openModal from './modules/modal/openModal';

const link = "http://simple-trello-a0138-default-rtdb.firebaseio.com/trello.json";

let activeBoard = [];
loadResourses(link);


window.addEventListener("DOMContentLoaded", () => {

  boardListener(link);
  columnListener();
  openModal("column-item-content", createModal, "column-item-menu");
  openModal("column-item-menu", createMenu, "column-item-content");
});

export { link, activeBoard };
