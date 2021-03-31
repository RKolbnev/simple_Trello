import addInput from '../addInput';
import progressBar from './progressBar';
import createCheckList from './createCheckList';

const modalListener = (modal, card, columnElement) => {
  modal.addEventListener('click', (e) => {
    closeModal(e, modal);
    changeCardName(e.target, card, columnElement);
    changeCardDesc(e.target, card);
    openPopupBg(e.target);
    changeBg(e.target, modal, card, columnElement);
    deleteBg(e.target, modal, card, columnElement);
    addComment(e.target, card);
    // Чек-лист
    addChecklist(e.target, modal, card);
    toggleChecklistItemStatus(e.target, card, modal);
    changeChecklistTitle(e.target, card);
    addChecklistItem(e.target, card, modal);



  })
}

//? Закрытие модального окна
function closeModal(e, modal) {
  if (e.target.hasAttribute("data-delete-modal") || e.target === modal) {
    e.stopPropagation();
    modal.remove();
  }
}
//? Изменение названия задачи
function changeCardName(target, card, columnElement) {
  if (target.hasAttribute('data-modal-title')) {
    const callback = (value) => {
      target.textContent = value;
      card.addDesc(value);
      columnElement.children[0].children[0].textContent = value;
    };
    target.style.display = "none";
    addInput(target, target.textContent, callback, "input-add__modal");
  }
}
//? Добавление/изменение описания задачи
function changeCardDesc(target, card) {
  if (target.hasAttribute("data-modal-desc")) {
    const callback = (value) => {
      target.textContent = value;
      card.addDesc(value);
    };

    target.style.display = "none";
    addInput(target, target.textContent, callback, "input-add__modal");
  }
}
//? Открытие popup-окна для выбора обложки
function openPopupBg(target) {
  if (target.textContent === "Обложка") {
    target.nextElementSibling.classList.toggle("hide");
  }
}
//? Изменение обложки
function changeBg(target, modal, card, columnElement) {
  if (target.hasAttribute("data-modal-bg")) {
    const color = getComputedStyle(target).backgroundColor;
    const bg = modal.querySelector(".modal-close");
    if (!bg.classList.contains("modal__bg")) {
      bg.classList.add("modal__bg");
    }
    bg.style.backgroundColor = color;
    const columnBg = columnElement.querySelector('[data-column-bg]');
    columnBg.classList.add('column-item__bg');
    columnBg.style.backgroundColor = color;

    card.addBackground(color);
  }
}
//? Удаление обложки
function deleteBg(target, modal, card, columnElement) {
  if (target.hasAttribute('data-delete-bg')) {
    const bg = modal.querySelector('.modal-close');
    bg.classList.remove('modal__bg');
    bg.style.backgroundColor = 'transparent';
    card.addBackground(null);
    const columnBg = columnElement.querySelector('[data-column-bg]');
    columnBg.classList.remove('column-item__bg');
    columnBg.style.backgroundColor = 'transparent';
  }
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
//? Изменение названи Чек-листа
function changeChecklistTitle(target, card) {
  if (target.hasAttribute("data-check-title")) {
    const callback = (value) => {
      target.textContent = value;
      const id = target.parentElement.parentElement.getAttribute("data-check-id");
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
      const checkItem = document.createElement("label");
      checkItem.innerHTML = `
          <input type="checkbox" data-check>
          ${value}
        `;
      target.parentElement.querySelector("div").append(checkItem);
      const id = target.closest("[data-check-id]").getAttribute("data-check-id");
      card.addChecklistItems(id, { value, status: false });
      progressBar(modal);
    };
    addInput(target, "", callback, "input-add__modal");
  }
}
//? Изменение в экземпляре класса Card статуса задачи в чек-листе
function toggleChecklistItemStatus(target, card, modal) {
  if (target.hasAttribute("data-check")) {
    const id = target.closest('[data-check-id]').getAttribute('data-check-id');
    const parent = target.parentElement;
    const value = parent.textContent;
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