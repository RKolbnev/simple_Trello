import {getData} from '../services/services';
import {store} from '../index';
import {Column} from './Column';


const startLoad = (link) => {
  getData(link)
    .then(data => {
      if (!data) {
        const cards = store.board.columns.id0.cards;
        const column = new Column(store.board.columns.id0.title);
        column.render(document.querySelector('.new__column'));
        const keys = Object.keys(cards);
        keys.forEach(key => {
          let {title, desc, comments, checkList, background} = cards[key];
          column.addCard(title, desc, comments, checkList, background);
        })
        console.log(column);
      }
    })
}

export default startLoad;