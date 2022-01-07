const errorModal = (word) => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-error">
      <p>Возникла ошибка! Данные не удалось ${word}!</p>
    </div>
  `;

  modal.addEventListener('click', (e) => modal.remove())

  document.querySelector(".main").append(modal);
  return modal;
};

export default errorModal;