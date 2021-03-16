const addItem = () => {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('board-add')) {
      const elem = document.createElement('div');
      elem.classList.add('board-item');
      elem.innerHTML = `
        <div class="board-item-title" contenteditable="true"> Введите заголовок для этой карточки</div>
      `;

      e.target.parentElement.previousElementSibling.append(elem);
    }
  })
}

export default addItem;