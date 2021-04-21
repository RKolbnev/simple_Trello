
const welcomeModal = () => {

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-welcome">
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/1200px-Trello-logo-blue.svg.png"
      alt="Trello"/>
      <p>Добро пожаловать в упрощенную версию приложения Trello!</p>
      <p>Создайте первую доску что-бы приступить к работе!</p>
      <div class="btn-group"">
        <button>Создать новую доску</button>
      </div>
    </div>
  `;

  modal.addEventListener('click', (e) => {
    if (e.target.textContent === 'Создать новую доску') {
      modal.remove();
      document.querySelector('.board-list').click();
      const add = document.querySelector('.board-add');
      add.click();
    }
  })

  document.querySelector('.main').append(modal);
}

export default welcomeModal;