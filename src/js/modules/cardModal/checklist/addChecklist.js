import createChecklist from './createChecklist';
import {link} from '../../../index';
import {patchReq} from '../../../services/services';
import idGenerate from '../../idGenerate';

function addChecklist(target, modal, card) {
  if (target.hasAttribute("data-modal-checklist")) {
    const id = idGenerate();
    const checklist = createChecklist(id);
    modal.querySelector(".desc").after(checklist);
    card.addChecklist(id);
    const body = {id, title: 'Чек-лист'}
    patchReq(link, body, card.getPath(), 'checklists', id);
  }
}

export default addChecklist;