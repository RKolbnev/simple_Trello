import {Column} from './Column';
import {link, store} from '../index';
// import {postData, getData} from '../services/services';


const addColumn = ( trigger="new__column", { title = "колонку", attr = "data-add-column", className }) => {
  const body = document.querySelector("body");

  body.addEventListener("click", (e) => {
    let target = null;

    if (e.target.classList.contains(trigger)) {
      target = e.target;
    } else if (e.target.parentElement.classList.contains(trigger)) {
      target = e.target.parentElement;
    }

    if (target) {
      const input = createInputElement(title, attr, className);
      target.before(input);

      const btns = input.querySelectorAll("BUTTON");
      btns.forEach((btn) => btn.addEventListener("click", () => {
        const value = btn.parentElement.previousElementSibling.value;
        if (btn.hasAttribute(attr) && value.length > 0) {
          const id = Math.random()
          const column = new Column({title: value, id: id});
          column.render(input);
          store[id] = column;
        }
        input.remove();
      }));
    }
  });
};

const addCard = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {

    if (e.target.parentElement.hasAttribute("data-add-card")) {
      const input = createInputElement("карточку", "data-add-card", "input__card");
      e.target.parentElement.before(input);

      input.nextElementSibling.style.display = 'none';

      const btns = input.querySelectorAll('BUTTON');
      btns.forEach(btn => btn.addEventListener("click", () => {
        const value = btn.parentElement.previousElementSibling.value;
        if (btn.hasAttribute("data-add-card")) {
          const id = input.parentElement.getAttribute('data-column-id');
          const column = store[id];
          column.addCard(value);
        }
        input.nextElementSibling.style.display = "";
        input.remove()
      }))
    }
  })

}

function createInputElement(title, attr, className) {
  const elem = document.createElement("div");
  elem.classList.add("column", className);
  elem.innerHTML = `
    <input class="column-item input column-item-title" placeholder="Введите заголовок">
    <div class="input-btn">
      <button class="btn-add" ${attr}><span>Добавить ${title}</span></button>
      <button class="btn-add"><span>&times;</span></button>
    </div>
  `;
  return elem;
}
export { addColumn, addCard };