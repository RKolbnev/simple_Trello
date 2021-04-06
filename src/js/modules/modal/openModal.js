import { store } from '../../index';

const openModal = (className, func, notContains) => {
  const main = document.querySelector(".main");
  main.addEventListener("click", (e) => {
    if (
      e.target.classList.contains(className) ||
      (e.target.parentElement.classList.contains(className) &&
        !e.target.classList.contains(notContains))
    ) {
      // try{
        const idColumn = e.target
        .closest("[data-column-id]")
        .getAttribute("data-column-id");
        const idCard = e.target
        .closest("[data-card-id]")
        .getAttribute("data-card-id");
        const card = store[idColumn].cards.filter(card => card.id == idCard);
        const modal = func(...card);
        main.append(modal);
      // } catch(e){}
    }
  });
};

export default openModal;