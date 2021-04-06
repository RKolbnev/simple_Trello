import progressBar from './progressBar';

function toggleChecklistTask(target, card, modal) {
  if (target.hasAttribute("data-check")) {
    const id = target.closest("[data-check-id]").getAttribute("data-check-id");
    const value = target.parentElement.textContent;
    card.changeChecklistTask(id, value.trim());
    if (target.hasAttribute("checked")) {
      target.removeAttribute("checked");
    } else {
      target.setAttribute("checked", "true");
    }
    progressBar(modal);
  }
}

export default toggleChecklistTask;