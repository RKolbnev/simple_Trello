import addInput from '../addInput';
import closeModal from './closeModal';
import changeTitle from './changeTitle';
import changeDesc from './changeDesc';
import changeBg from './changeBg';

import progressBar from './progressBar';
import createCheckList from './createCheckList';

const modalListener = (modal, card, cardElem) => {
  modal.addEventListener('click', (e) => {

    closeModal(e, modal);
    changeTitle(e.target, card, cardElem, e.target);
    changeDesc(e.target, card, e.target);
    changeBg(e.target, card, cardElem, e.target);
    addComment(e.target, card);
    // Чек-лист
    addChecklist(e.target, modal, card);
    removeChecklist(e.target, card);
    toggleChecklistItemStatus(e.target, card, modal);
    changeChecklistTitle(e.target, card);
    addChecklistItem(e.target, card, modal);
    removeChecklistItem(e, card);
  })
}

//? Добавление комментария
function addComment(target, card) {
  if (target.hasAttribute("data-modal-comments")) {
    const callback = (value) => {
      const wrap = target.nextElementSibling;
      const div = document.createElement("div");
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      const date = new Date().toLocaleString("ru", options);
      div.innerHTML = `
            <p>${value}</p>
            <span>${date}</span>
          `;
      wrap.prepend(div);
      card.addComment({ value, date });
    };

    target.style.display = "none";
    addInput(target, "", callback, "input-add__modal");
  }
}

//* ЧЕК-ЛИСТ
//? Добавление Чек-листа на страницу
function addChecklist(target, modal, card) {
  if (target.hasAttribute("data-modal-checklist")) {
    const id = Math.random();
    const checklist = createCheckList(id);
    modal.querySelector(".desc").after(checklist);
    card.addChecklist(id);
  }
}
//? Удаление Чек-листа
function removeChecklist(target, card) {
  if (target.hasAttribute('data-delete-checklist')) {
    const checklist = target.closest('[data-check-id]');
    const id = checklist.getAttribute('data-check-id');
    checklist.remove();
    card.removeChecklist(id);
  }
}
//? Изменение названи Чек-листа
function changeChecklistTitle(target, card) {
  if (target.hasAttribute("data-check-title")) {
    const callback = (value) => {
      target.textContent = value;
      const id = target.closest('[data-check-id]').getAttribute("data-check-id");
      card.changeChecklistTitle(id, value);
      target.parentElement.style.display = '';
    };
    target.parentElement.style.display = 'none'
    addInput(target.parentElement, target.textContent, callback, "input-add__modal");
  }
}
//? Добавление задачи в Чек-лист
function addChecklistItem(target, card, modal) {
  if (target.hasAttribute("data-modal-addcheck")) {
    const callback = (value) => {
      const checkItem = document.createElement("li");
      checkItem.classList.add('checkList-item');
      checkItem.innerHTML = `
        <label>
          <input type="checkbox" data-check>
          ${value}
        </label>
        <span data-delete-checkItem>&times;</span>
        `;
      target.parentElement.querySelector("div").append(checkItem);
      const id = target.closest("[data-check-id]").getAttribute("data-check-id");
      card.addChecklistItems(id, { value, status: false });
      progressBar(modal);
    };
    addInput(target, "", callback, "input-add__modal");
  }
}
//? Удаление задачи из Чек-листа
function removeChecklistItem(e, card) {
  if (e.target.hasAttribute('data-delete-checkItem')) {
    const id = e.target.closest('[data-check-id]').getAttribute('data-check-id');
    const value = e.target.previousElementSibling.textContent;
    e.target.parentElement.remove();
    card.removeChecklistItem(id, value.trim());
  }
}
//? Изменение в экземпляре класса Card статуса задачи в чек-листе
function toggleChecklistItemStatus(target, card, modal) {
  if (target.hasAttribute("data-check")) {
    const id = target.closest('[data-check-id]').getAttribute('data-check-id');
    const value = target.parentElement.textContent;
    card.changeChecklistItem(id, value.trim());
    if (target.hasAttribute('checked')) {
      target.removeAttribute('checked');
    } else {
      target.setAttribute('checked', 'true')
    }
    progressBar(modal);
  }
}



export default modalListener;