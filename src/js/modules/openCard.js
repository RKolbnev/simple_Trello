import { store } from "../index";

const openCard = () => {
  const main = document.querySelector(".main");

  main.addEventListener("click", (e) => {
    let target;
    if (e.target.hasAttribute("data-card-id")) {
      target = e.target;
    } else if (e.target.parentElement.hasAttribute("data-card-id")) {
      target = e.target.parentElement;
    }

    if (target) {
      const parent = target.parentElement.parentElement;
      const idCard = target.getAttribute("data-card-id");
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
            <input placeholder="${card.desc}">
            <div class="input-btn hide modal-btn">
              <button class="btn-add" data-add-desc>Добавить</button>
              <button class="btn-add"><span>&times;</span></button>
            </div>
          </div>
        </div>

        <div class="comments modal__item">
          <span class="modal-logo"> &#x270E;</span>
          <div class="modal-content">
            <p>Комментарии</p>
            <input placeholder="Добавить комментарий">
            <div class="input-btn hide modal-btn">
              <button class="btn-add" data-add-comment>Добавить</button>
              <button class="btn-add"><span>&times;</span></button>
            </div>
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

      <span class="modal-close" data-delete-modal>&times;</span>

    </div>

  `;

  const title = modal.querySelector(".title");
  const desc = modal.querySelector(".desc");
  const comments = modal.querySelector(".comments");


  if (card.comments.length > 0) {
    for (let i of card.comments) {
      addComment(i);
    }
  }

  modal.addEventListener('input', (e) => {
    if (e.target.parentElement.classList.contains("modal-content")) {
      e.target.nextElementSibling.classList.remove("hide");
    }
  })

  modal.addEventListener('click', (e) => {
    if (e.target.hasAttribute("data-delete-modal")) {
      modal.remove();
    }
    if (e.target.hasAttribute("data-add-comment")) {
      const value = e.target.parentElement.previousElementSibling;
      card.addComment(value.value);
      addComment(value.value);
      value.value = '';
      value.nextElementSibling.classList.add("hide");
    }
    if (e.target.hasAttribute("data-add-desc")) {
      const value = e.target.parentElement.previousElementSibling;
      card.addDesc(value.value);
      value.nextElementSibling.classList.add("hide");
      const desc = document.createElement('div');
      desc.classList.add('modal-desc')
      desc.textContent = value.value;
      value.nextElementSibling.before(desc);
      value.remove();
    }
    if (e.target.parentElement.classList.contains("btn-add")) {
      e.target.parentElement.parentElement.classList.add("hide");
    }
    if (e.target.textContent === 'Чек-лист') {
      const checkList = document.createElement('div');
      checkList.classList.add("modal-check");

      desc.after(checkLict);
    }
  })


  function addComment(text) {
    const wrapper = comments.querySelector(".comments-wrapper");
    const comment = document.createElement("p");
    comment.textContent = text;

    wrapper.append(comment);
  }

  return modal;
}




export {openCard};









