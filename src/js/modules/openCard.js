import { store } from "../index";
import modalListener from './modalListener';


const openCard = () => {
  const main = document.querySelector(".main");

  main.addEventListener("click", (e) => {
    if (e.target.hasAttribute('data-card-id')) {

      const parent = e.target.parentElement.parentElement;
      const idCard = e.target.getAttribute("data-card-id");
      const idColumn = parent.getAttribute('data-column-id')
      const card = store[idColumn].cards[idCard];
      const modal = createModal(card);

      main.append(modal);
    }
  });
};

function createModal(card) {
  const modal = document.createElement('div');

  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-popup">
      <span class="modal-close" data-delete-modal>&times;</span>
      <div class="wrapper">
        <div class="modal-main">

          <div class="title modal__item">
            <span class="modal-logo">&#x2712;</span>
            <div class="modal-content">
              <p>${card.title}</p>
            </div>
          </div>

          <div class="desc modal__item">
            <span class="modal-logo"> &equiv;</span>
            <div class="modal-content">
              <p>Описание</p>
              <p data-modal-desc>Добавить более подробное описание..</p>
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
            <button>Чек-лист</button>
            <button>Обложка</button>
          </div>
        </div>

      </div>
    </div>
  `;

  if (card.desc) {
    const desc = modal.querySelector('[data-modal-desc]');
    console.log(desc);
    desc.textContent = card.desc;
  }

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

  modalListener(modal, card);
  return modal;
}

export {openCard};









