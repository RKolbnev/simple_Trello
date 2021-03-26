import addInput from './addInput';

const modalListener = (modal, card, elem) => {
  modal.addEventListener('click', (e) => {
    // Закрытие модального окна
    if (e.target.hasAttribute("data-delete-modal") || e.target === modal) {
      e.stopPropagation();
      modal.remove();
    }
    // Изменение названия задачи
    if (e.target.hasAttribute('data-modal-title')) {
      const callback = (value) => {
        e.target.textContent = value;
        card.addDesc(value);
        elem.children[0].textContent = value;
      };

      e.target.style.display = "none";
      addInput(e.target, e.target.textContent, callback, "input-add__modal");
    }

    // Добавление/изменение описания задачи
    if (e.target.hasAttribute("data-modal-desc")) {
      const callback = (value) => {
        e.target.textContent = value;
        card.addDesc(value);
      };

      e.target.style.display = "none";
      addInput(e.target, e.target.textContent, callback, "input-add__modal");
    }

    // Добавление комментариев
    if (e.target.hasAttribute("data-modal-comments")) {
      const callback = (value) => {
        const wrap = e.target.nextElementSibling;
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

      e.target.style.display = "none";
      addInput(e.target, "", callback, "input-add__modal");
    }
    // Открытие popup Bg
    if (e.target.textContent === 'Обложка') {
      e.target.nextElementSibling.classList.toggle('hide');
    }
    // Смена bg
    if (e.target.hasAttribute('data-modal-bg')) {
      const color = window.getComputedStyle(e.target).backgroundColor;
      const bg = modal.querySelector('.modal-close');
      if (!bg.classList.contains('modal__bg')) {
        bg.classList.add('modal__bg');
      }
      bg.style.backgroundColor = color;
      console.log(elem);
      elem.children[1].style.backgroundColor = color;
      card.addBackground(color);
    }

    // Добавление Чек-листа
    if (e.target.hasAttribute('data-modal-checklist')) {
      const id = Math.random();
      const checklist = createCheckList(id);
      modal.querySelector('.desc').after(checklist);
      card.addChecklist(id);
    }

    // Добавление элемента чек листа
    if (e.target.hasAttribute('data-modal-check')) {
      const callback = (value) => {
        const checkItem = document.createElement('label');
        checkItem.innerHTML = `
          <input type="checkbox" data-check>
          ${value}
        `;
        e.target.parentElement.querySelector('div').append(checkItem);
        const id = e.target.closest('[data-check-id]').getAttribute('data-check-id');
        card.addChecklistItems(id, { value, status: false });
      }
      addInput(e.target, "", callback, "input-add__modal");
    }

    // изменение статуса задачи чек листа в классе карточки
    if (e.target.hasAttribute("data-check")) {
      const id = e.target.closest('[data-check-id]').getAttribute('data-check-id');
      const parent = e.target.parentElement;
      const value = parent.textContent;
      card.changeChecklistItem(id, value.trim());
      const progress = parent.parentElement.previousElementSibling;
      const percentStep = Math.ceil(100 / parent.parentElement.children.length);
      if (!e.target.hasAttribute('checked')) {
        progress.value += percentStep;
        e.target.setAttribute('checked', 'true');
      } else {
        progress.value -= percentStep
        e.target.removeAttribute("checked");
      }
      console.log(parent.parentElement);

    }
  })
}


function createCheckList(id) {
  const checkList = document.createElement('div');
  checkList.setAttribute('data-check-id', id);
  checkList.classList.add('modal__item');
  checkList.innerHTML = `
    <span class="modal-logo">	&#9745;</span>
    <div class="modal-content">
      <p data-check-title>Чек-лист <span>&times;</span></p>
      <div class="checkList">
        <progress value="" max="100"></progress>
        <div></div>
        <p data-modal-check>Добавить элемент</p>
      </div>
    </div>
  `;

  return checkList;
}

function checked() {

}

export {createCheckList};


export default modalListener;