import { activeBoard } from '../../index';


const openModal = (className, func, notContains) => {
  const main = document.querySelector(".main");
  main.addEventListener("click", (e) => {
    if (!document.querySelector('.modal-menu') && (
      e.target.classList.contains(className) ||
      (e.target.parentElement.classList.contains(className) &&
        !e.target.classList.contains(notContains)))
    ) {
      const idColumn = e.target
      .closest("[data-column-id]")
      .getAttribute("data-column-id");
      const idCard = e.target
      .closest("[data-card-id]")
      .getAttribute("data-card-id");
      const card = activeBoard[0].columns[idColumn].cards[idCard];
      const modal = func(card);
      main.append(modal);
    }
  });
};

export default openModal;