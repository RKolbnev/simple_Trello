import {link} from '../../../index';
import {deleteData} from '../../../services/services';

function removeChecklist(target, card) {
  if (target.hasAttribute("data-delete-checklist")) {
    const checklist = target.closest("[data-check-id]");
    const id = checklist.getAttribute("data-check-id");
    checklist.remove();
    card.removeChecklist(id);
    deleteData(link, card.getPath(), 'checklists', id);
  }
}

export default removeChecklist;