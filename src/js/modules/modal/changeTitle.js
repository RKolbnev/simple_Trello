import addInput from '../addInput';
import { patchReq, getData } from '../../services/services';
import { link } from '../../index';

const changeTitle = (target, card, place) => {
  if (target.hasAttribute('data-card-title')) {
    place.style.display = 'none';
    let className = "input-add__" + (target.closest('.modal') ? "modal" : "menu");

    addInput(place, card.title, className, card.title, (value) => {
      value = value.trim();
      card.domElement.querySelector("[data-column-card-title]").textContent = value;
      card.setTitle(value);
      if (target === place) {
        target.textContent = value;
      } else {
        const parent = place.parentElement;
        parent.textContent = "";
        parent.append(card.domElement.cloneNode(true));
      }
      const body = {title: value}
      patchReq(link, body, card.getPath());
    });
  }
};

export default changeTitle;