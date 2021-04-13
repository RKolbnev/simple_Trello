import addInput from "../addInput";
import {link} from '../../index';
import {patchReq} from '../../services/services';

function changeDesc(target, card, place) {
  if (target.hasAttribute('data-card-desc')) {
    place.style.display = 'none';

    let placeholder = card.desc ? card.desc : 'Добавить описание';
    let className = "input-add__" + (place === target ? "modal" : "menu");
    let text = card.desc ? card.desc : '';

    addInput(place, placeholder, className, text, (value) => {
      value = value.trim();
      if (place === target) {
        target.textContent = value;
      }
      card.addDesc(value);
      patchReq(link, {desc: value}, card.getPath())
    });
  }
}

export default changeDesc;