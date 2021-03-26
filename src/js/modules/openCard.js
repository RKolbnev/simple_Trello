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
      <div class="modal-close">
        <span data-delete-modal>&times;</span>
      </div>
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
            <div class="modal-bg-popup hide">
              <p>Цвета</p>
              <div class="modal-bg-color">
                <span data-modal-bg="modal__bg-red"></span>
                <span data-modal-bg="modal__bg-blue"></span>
                <span data-modal-bg="modal__bg-green"></span>
                <span data-modal-bg="modal__bg-yellow"></span>
                <span data-modal-bg="modal__bg-darkred"></span>
                <span data-modal-bg="modal__bg-darkgreen"></span>
                <span data-modal-bg="modal__bg-darkblue"></span>
                <span data-modal-bg="modal__bg-darkgrey"></span>
              </div>
            </div>
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

  if (card.background) {
    const bg = modal.querySelector('.modal-close');
    bg.classList.add('modal__bg');
    bg.style.backgroundColor = card.background;
  }

  modalListener(modal, card);
  return modal;
}

export {openCard};









