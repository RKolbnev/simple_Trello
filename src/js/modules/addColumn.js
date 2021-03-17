import {Column} from './Column';

const addColumn = (trigger='.new__column') => {
  const triggerBtn = document.querySelector(trigger);


  triggerBtn.addEventListener('click', () => {
    const input = document.createElement('div');
    input.classList.add('column');
    input.innerHTML = `

      <input class="column-item input column-item-title" placeholder="Введите заголовок списка">
      <div class="input-btn">
        <button class="btn-add"><span>Добавить колонку</span></button>
        <button class="btn-add"><span>&times;</span></button>
      </div>
    `;

    triggerBtn.before(input);

    const btns = input.querySelectorAll('BUTTON');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if ((btn.textContent === "Добавить колонку")) {
          const value = btn.parentElement.previousElementSibling.value;

          if (value.length > 0) {
            const column = new Column(value).render(input)
            input.remove()
          }
        } else {
          input.remove();
        }

      })
    })

  });
}

export default addColumn;