import progressBar from "../progressBar";
import { link } from "../../../index";
import { patchReq } from "../../../services/services";

function toggleChecklistTask(target, card, modal) {
  if (target.hasAttribute("data-check")) {
    const idChecklist = target
      .closest("[data-check-id]")
      .getAttribute("data-check-id");
    const idTask = target
      .closest("[data-task-id]")
      .getAttribute("data-task-id");
    card.changeChecklistTask(idChecklist, idTask);

    let body;
    if (target.hasAttribute("checked")) {
      target.removeAttribute("checked");
      body = { status: false };
    } else {
      target.setAttribute("checked", "true");
      body = { status: true };
    }
    patchReq( link, body, card.getPath(), "checklists", idChecklist, "tasks", idTask);
    progressBar(modal);
  }
}

export default toggleChecklistTask;
