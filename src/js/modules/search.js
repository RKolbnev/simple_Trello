import {getData} from '../services/services';
import {link, activeBoard} from '../index';
import preloader from './preloader';
import Board from './Classes/Board.js';

const search = () => {

  const input = document.querySelector('.search-area');
  const btn = document.querySelector('.search-btn');
  const results = document.querySelector('.search-results');

  btn.addEventListener("click", letSearch);
  input.addEventListener("keypress", letSearch);
  results.addEventListener('click', goToResult);


  function letSearch(e) {
    if (e.key && e.key !== "Enter") return;
    if (e.target === btn || e.key === "Enter") {
      results.textContent = '';
      const value = input.value.trim();
      input.value = '';
      if (value.length == 0) {
        return;
      }
      const loader = preloader('.search-results', '.search-loader')
      getData(link)
      .then(data => {
        const res = searching(data, value);
        if (res.length === 0) {
          return results.innerHTML ='<span class="result-zero"> Поиск не дал результатов</span>';
        }
        res.forEach(item => {
          if (item.length < 4) {
            createResult(item[item.length-1], 'boards', item[0])
          } else {
            for (let i = item.length - 1; i != 0; i--) {
              if (["checklists", "comments", "cards", "columns"].includes(item[i])) {
                return  createResult(item[item.length-1], item[i], item.slice(0, i+2)) ;
              }
            }
          }
        });
        loader.remove();
      })
    }
  }

  function searching(data, value) {
    let path = [];

    for (let key in data) {
      if ((typeof data[key] === "object" && data[key] !== null )) {
        let res = searching(data[key], value);
        if (res.length > 0) {
          res.map(i => i.unshift(key))
          path.push(...res);
        }
      } else {
        String(data[key]).indexOf(value) !== -1 ? path.push([key, data[key]]) : '';
      }
    }
    return path;
  }

  function createResult(value, place, path) {
    const places = {
      checklists: 'Чек-лист',
      comments: 'Комментарий',
      cards: 'Карточка',
      columns: 'Колонка',
      boards: 'Доска'
    }

    const div = document.createElement('div');
    div.classList.add('search-result');
    try{
      path = path.join('-');
    } catch(e){}
    div.setAttribute('data-path', path);
    div.innerHTML = `
      <span>${places[place]}:</span>
      <span>${value}</span>
      <button>Перейти</button>
    `;

    document.querySelector(".search-results").append(div);
  }

  function goToResult(e) {
    if (e.target.closest(".search-result")) {
      let path = e.target.closest(".search-result").getAttribute('data-path');
      path = path.split('-');
      e.target.closest(".search-results").classList.add('hide');
      e.target.closest('.search-results').textContent = '';
      const load = preloader(".main", "modal");
      localStorage.setItem("activeBoardID", path[0]);
      getData(link, path[0])
      .then(({ id, title, columns }) => {
        load.remove();
        const board = new Board(id, title, columns);
        board.init();
        board.render();
        activeBoard.splice(0, 1, board);
        try {
          const idx = path.indexOf("cards");
          document.querySelector(`[data-card-id="${path[idx+1]}"] div`).click();
        } catch (e) {}
      })
    }
  }
}



export default search;