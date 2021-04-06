function removeCard(target, modal, card) {
  if (target.textContent === "Удалить карточку") {
    card.domElement.remove();
    modal.remove();
    card.column.removeCard(card.id);
  }
}

export default removeCard;