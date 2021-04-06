import createChecklist from './createChecklist';

function addChecklist(target, modal, card) {
  if (target.hasAttribute("data-modal-checklist")) {
    const id = Math.random();
    const checklist = createChecklist(id);
    modal.querySelector(".desc").after(checklist);
    card.addChecklist(id);
  }
}

export default addChecklist;