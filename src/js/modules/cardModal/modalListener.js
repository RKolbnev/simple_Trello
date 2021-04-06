import closeModal from '../modal/closeModal';
import changeTitle from '../modal/changeTitle';
import changeDesc from '../modal/changeDesc';
import changeBg from '../modal/changeBg';
import addComment from './addComment';
import removeComment from './removeComment';
import addChecklist from './addChecklist';
import removeChecklist from './removeChecklist';
import changeChecklistTitle from './changeChecklistTitle';
import addChecklistTask from './addChecklistTask';
import removeChecklistTask from './removeChecklistTask';
import toggleChecklistTask from './toggleChecklistTask';

const modalListener = (modal, card) => {
  modal.addEventListener('click', (e) => {

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