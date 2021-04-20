const noticeModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-welcome">
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/1200px-Trello-logo-blue.svg.png"
      alt="Trello"/>
      <p>Для начала создайте свою первую доску!</p>
      <div class="btn-group"">
        <button>Закрыть</button>
      </div>
    </div>
  `;

  modal.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.tagName === "BUTTON" || e.target.classList.contains('modal')) {
      modal.remove();
    }
  })

  document.querySelector(".main").append(modal);
}
export default noticeModal;