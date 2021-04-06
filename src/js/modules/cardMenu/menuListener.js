import closeModal from '../modal/closeModal';
import changeDesc from '../modal/changeDesc';
import changeTitle from '../modal/changeTitle';
import changeBg from '../modal/changeBg';
import removeCard from './removeCard';
import openCard from './openCard';

const menuListener = (modal, card) => {
  modal.addEventListener('click', (e) => {
    const place = modal.querySelector('.modal-menu-card').children[0];

    closeModal(e, modal);
    changeTitle(e.target, card, place);
    changeDesc(e.target, card, place);
    changeBg(e.target, card, place);
    removeCard(e.target, modal, card);
    openCard(e.target, modal, card);
  })
}

export default menuListener;