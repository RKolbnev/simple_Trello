function openCard(target, modal, card) {
  if (target.textContent === "Открыть карточку") {
    modal.remove();
    card.domElement.children[0].click();
  }
}

export default openCard;