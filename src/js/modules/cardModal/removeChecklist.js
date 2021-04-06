function removeChecklist(target, card) {
  if (target.hasAttribute("data-delete-checklist")) {
    const checklist = target.closest("[data-check-id]");
    const id = checklist.getAttribute("data-check-id");
    checklist.remove();
    card.removeChecklist(id);
  }
}

export default removeChecklist;