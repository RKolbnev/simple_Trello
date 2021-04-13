import { link } from "../../../index";
import { deleteData } from "../../../services/services";

function removeChecklistTask(target, card) {
  if (target.hasAttribute("data-delete-task")) {
    const idChecklist = target.closest("[data-check-id]").getAttribute("data-check-id");
    const idTask = target.closest('[data-task-id]').getAttribute('data-task-id');
    target.parentElement.remove();
    card.removeChecklistTask(idChecklist, idTask);
    deleteData(link, card.getPath(), 'checklists', idChecklist, 'tasks', idTask)
  }
}

export default removeChecklistTask;
