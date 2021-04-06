function removeChecklistTask(target, card) {
  if (target.hasAttribute("data-delete-task")) {
    const id = target
      .closest("[data-check-id]")
      .getAttribute("data-check-id");
    const value = target.previousElementSibling.textContent;
    target.parentElement.remove();
    card.removeChecklistTask(id, value.trim());
  }
}

export default removeChecklistTask;