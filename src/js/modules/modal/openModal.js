import { store } from '../../index';

const openModal = (className, func, notContains) => {
  const main = document.querySelector(".main");
  main.addEventListener("click", (e) => {
    if (
      e.target.classList.contains(className) ||
      (e.target.parentElement.classList.contains(className) &&
        !e.target.classList.contains(notContains))
    ) {
      try {
        const column = e.target.closest("[data-column-id]");
        const idColumn = column.getAttribute("data-column-id");
        const cardElem = e.target.closest("[data-card-id]");
        const idCard = cardElem.getAttribute("data-card-id");
        const card = store[idColumn].cards[idCard];
        const modal = func(card, cardElem, store[idColumn]);
        main.append(modal);
      } catch(error) {}
    }
  });
};

export default openModal;