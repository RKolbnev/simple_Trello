// import startLoad from './modules/stardLoad';
// import board from './modules/board';
import addColumn from './modules/addColumn';
import addCard from './modules/addCard';
import removeColumn from './modules/removeColumn';
import openModal from './modules/modal/openModal';
import createModal from './modules/cardModal/createModal';
import createMenu from './modules/cardMenu/createMenu';

import {getData} from './services/services';

const link = "http://simple-trello-a0138-default-rtdb.firebaseio.com/trello.json";



window.addEventListener("DOMContentLoaded", () => {
  // startLoad(link);
  // board(link);
  addColumn();
  removeColumn();
  addCard();
  openModal("column-item-content", createModal, "column-item-menu");
  openModal("column-item-menu", createMenu, "column-item-content");
});


let store = {
  board: {
    title: "Стратовая страница",
    columns: {
      id0: {
        title: "Колонка карточек",
        cards: [
          {
            title: "Первая карточка",
            desc: "Сюда можно добавить описание",
            comments: [
              {
                value: "Карточки, можно комментировать",
                date: new Date(),
              },
            ],
            checkList: [
              {
                id: "testId",
                title: "Знакомство с приложением",
                checkItems: [
                  {
                    value: "Открыть первую карточку",
                    status: true,
                  },
                  {
                    value: "Удалить первую задачу в чек-листе",
                    status: false,
                  },
                ],
              },
            ],
            background: "red",
          },
          {
            title: "Карточка №2",
            desc:
              "Кликни меня что бы изменить описание задачи. Кстати, таким способом вы так же можете менять названия карточек и чек-листов",
            comments: [],
            checkList: [],
            background: "blue",
          },
        ],
      },
    },
  },
};

export { link, store };
