import closeModal from '../modal/closeModal';
import changeTitle from '../modal/changeTitle';
import changeDesc from '../modal/changeDesc';
import changeBg from '../modal/changeBg';
import removeCard from '../modal/removeCard';
import addComment from './comments/addComment';
import removeComment from './comments/removeComment';
import addChecklist from './checklist/addChecklist';
import removeChecklist from './checklist/removeChecklist';
import changeChecklistTitle from './checklist/changeChecklistTitle';
import addChecklistTask from './checklist/addChecklistTask';
import removeChecklistTask from './checklist/removeChecklistTask';
import toggleChecklistTask from './checklist/toggleChecklistTask';

const modalListener = (modal, card) => {
  modal.addEventListener('click', (e) => {

    removeCard(e.target, modal, card);
    closeModal(e, modal);
    changeTitle(e.target, card, e.target);
    changeDesc(e.target, card, e.target);
    changeBg(e.target, card, e.target);
    addComment(e.target, card);
    removeComment(e.target, card);
    // Чек-лист
    addChecklist(e.target, modal, card);
    removeChecklist(e.target, card);
    changeChecklistTitle(e.target, card);
    addChecklistTask(e.target, card, modal);
    toggleChecklistTask(e.target, card, modal);
    removeChecklistTask(e.target, card);
  })
}

export default modalListener;