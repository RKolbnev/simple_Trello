function createCheckList(id, title = "Чек-лист") {
  const checkList = document.createElement("div");
  checkList.setAttribute("data-check-id", id);
  checkList.classList.add("modal__item");
  checkList.innerHTML = `
    <span class="modal-logo">	&#9745;</span>
    <div class="modal-content">
      <p> <span data-check-title> ${title}</span> <span data-delete-checklist>Удалить</span></p>
      <div class="checkList">
        <progress value="" max="100"></progress>
        <div></div>
        <p data-modal-addcheck>Добавить элемент</p>
      </div>
    </div>
  `;

  return checkList;
}

export default createCheckList;