import {Board} from './Board';

const addBoard = (trigger='.header-plus', parent='.main') => {
  const triggerBtn = document.querySelector(trigger);
  const parentElement = document.querySelector(parent);


  triggerBtn.addEventListener('click', () => {
    new Board().render(parentElement);
  });


}

export default addBoard;