import addInput from '../addInput';
import progressBar from './progressBar';

function addChecklistTask(target, card, modal) {
  if (target.hasAttribute("data-modal-addcheck")) {
    const callback = (value) => {
      const checkItem = document.createElement("li");
      checkItem.classList.add("checklist-item");
      checkItem.innerHTML = `
        <label>
          <input type="checkbox" data-check>
          ${value}
        </label>
        <span data-delete-task>&times;</span>
        `;
      target.parentElement.querySelector("div").append(checkItem);
      const id = target
        .closest("[data-check-id]")
        .getAttribute("data-check-id");
      card.addChecklistTask(id, { value, status: false });
      progressBar(modal);
    };
    addInput(target, "", callback, "input-add__modal");
  }
}

export default addChecklistTask;