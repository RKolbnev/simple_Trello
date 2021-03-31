import { store } from "../index";
import createModal from "./modal/createModal";

const openModal = () => {
  const main = document.querySelector(".main");
  main.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("column-item-content") ||
      (e.target.parentElement.classList.contains("column-item-content") &&
        !e.target.classList.contains("column-item-menu"))
    ) {
      const column = e.target.closest("[data-column-id]");
      const idColumn = column.getAttribute("data-column-id");
      const cardElem = e.target.closest("[data-card-id]");
      const idCard = cardElem.getAttribute("data-card-id");
      const card = store[idColumn].cards[idCard];
      const modal = createModal(card, cardElem);

      main.append(modal);
    }
  });
};

export default openModal;
