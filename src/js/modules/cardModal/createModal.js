import modalListener from "./modalListener";
import createChecklist from "./checklist/createChecklist";
import progressBar from "./progressBar";

function createModal(card) {
  const modal = document.createElement("div");

  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-popup">
      <div class="modal-close ${card.background ? "modal__bg" : ""}"
      style="background-color: ${card.background ? card.background : ''};">
        <span data-modal-close>&times;</span>
      </div>
      <div class="wrapper">
        <div class="modal-main">

          <div class="title modal__item">
            <span class="modal-logo">&#x2712;</span>
            <div class="modal-content">
              <p data-card-title>${card.title}</p>
            </div>
          </div>

          <div class="desc modal__item">
            <span class="modal-logo"> &equiv;</span>
            <div class="modal-content">
              <p>Описание</p>
              <p data-card-desc>${
                card.desc ? card.desc : "Добавить более подробное описание..."
              }</p>
            </div>
          </div>

          <div class="comments modal__item">
            <span class="modal-logo"> &#x270E;</span>
            <div class="modal-content">
              <p>Комментарии</p>
              <p data-modal-comments>Добавить комментарий</p>
              <div class="comments-wrapper"></div>
            </div>
          </div>

        </div>

        <div class="modal-add">
          <p>Добавить на карточку</p>
          <div>
            <button data-modal-checklist>Чек-лист</button>
            <button data-card-bg>Обложка</button>
            <button data-delete-card>Удалить карточку</button>
          </div>
        </div>

      </div>
    </div>
  `;

  addComments(card, modal);
  addChecklist(card, modal);
  modalListener(modal, card);
  return modal;
}

function addComments(card, modal) {
  if (card.comments) {
    const wrap = modal.querySelector(".comments-wrapper");
    const sorted = Object.entries(card.comments).sort((a, b) => a[1].date > b[1].date ? 1 : -1)
    for (let i of sorted) {
      const div = document.createElement("div");
      div.setAttribute("data-comment-id", i[1].id);
      div.innerHTML = `
      <div>
        <p>${i[1].value}</p>
        <span data-delete-comment>&times;</span>
      </div>
      <span>${i[1].date}</span>
      `;
      wrap.prepend(div);
    }
  }
}

function addChecklist(card, modal) {
  if (card.checklists) {
    for (let key in card.checklists) {
      const item = card.checklists[key];
      const checklist = createChecklist(item.id, item.title);
      modal.querySelector(".comments").before(checklist);
      for (let key in item.tasks) {
        const tasksItem = item.tasks[key];
        const wrap = checklist.querySelector(".checklist div");
        const attr = tasksItem.status ? "checked" : "";
        const task = document.createElement("li");
        task.classList.add("checklist-item");
        task.setAttribute('data-task-id', tasksItem.id)
        task.innerHTML = `
          <label>
            <input type="checkbox" ${attr} data-check>
            ${tasksItem.value}
          </label>
          <span data-delete-task>&times;</span>
        `;
        wrap.append(task);
      }
    }
    progressBar(modal);
  }
}

export default createModal;
