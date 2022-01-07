import { link } from "../../index";
import { deleteData } from "../../services/services";

function removeCard(target, modal, card) {
  if (target.textContent === "Удалить карточку") {
    card.domElement.remove();
    modal.remove();
    card.column.removeCard(card.id);
    deleteData(link, card.getPath())
  }
}

export default removeCard;
