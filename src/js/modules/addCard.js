

const addCard = () => {
  const body = document.querySelector("body");

  body.addEventListener("click", (e) => {
    if (e.target.parentElement.hasAttribute("data-add-card")) {
      const parent = e.target.parentElement;
      parent.innerHTML = `
      <div>
        <input class="column-item input column-item-title" placeholder="Введите заголовок для карточки">

        <div class="input-btn input-btn__card">
          <button class="btn-add"><span>Добавить колонку</span></button>
          <button class="btn-add"><span>&times;</span></button>
        </div>

      </div>
      `;
      const value = parent.querySelector('INPUT').value;


    }
  });
};

export default addCard;
