import modalListener from "./modalListener";
import createCheckList from "./createCheckList";
import progressBar from "./progressBar";

function createModal(card, elem) {
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
          </div>
        </div>

      </div>
    </div>
  `;

  addComments(card, modal);
  addChecklist(card, modal);

  modalListener(modal, card, elem);
  return modal;
}

function addComments(card, modal) {
  if (card.comments.length !== 0) {
    const wrap = modal.querySelector(".comments-wrapper");
    for (let i of card.comments) {
      const div = document.createElement("div");
      div.innerHTML = `
      <p>${i.value}</p>
      <span>${i.date}</span>
      `;
      wrap.prepend(div);
    }
  }
}

function addChecklist(card, modal) {
  if (card.checkList.length !== 0) {
    card.checkList.forEach((list) => {
      const checkList = createCheckList(list.id, list.title);
      modal.querySelector(".desc").after(checkList);
      list.checkItems.forEach((item) => {
        const wrap = modal.querySelector(".checkList div");
        const attr = item.status ? "checked" : "";
        const checkItem = document.createElement("label");
        checkItem.innerHTML = `
        <input type="checkbox" ${attr} data-check>
        ${item.value}
        `;
        wrap.append(checkItem);
      });
    });
    progressBar(modal);
  }
}

export default createModal;
