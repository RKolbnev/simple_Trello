import addInput from '../../addInput';
import progressBar from '../progressBar';
import {link} from '../../../index';
import {patchReq} from '../../../services/services';
import idGenerate from '../../idGenerate';

function addChecklistTask(target, card, modal) {
  if (target.hasAttribute("data-modal-addcheck")) {
    addInput(target, "Введите название задачи", "input-add__modal", false, (value) => {
      const task = document.createElement("li");
      task.classList.add("checklist-item");
      const id = idGenerate();
      task.setAttribute('data-task-id', id);
      task.innerHTML = `
        <label>
          <input type="checkbox" data-check>
          ${value}
        </label>
        <span data-delete-task>&times;</span>
      `;
      target.parentElement.querySelector("div").append(task);
      const idChecklist = target
        .closest("[data-check-id]")
        .getAttribute("data-check-id");
      console.log(idChecklist);
      const body = {id, value, status: false };
      card.addChecklistTask(idChecklist, body);
      progressBar(modal);
      patchReq(link, body, card.getPath(), 'checklists', idChecklist, 'tasks', body.id);
    });
  }
}

export default addChecklistTask;