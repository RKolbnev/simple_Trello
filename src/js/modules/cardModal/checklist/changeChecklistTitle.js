import addInput from '../../addInput';
import { link } from "../../../index";
import { patchReq } from "../../../services/services";

function changeChecklistTitle(target, card) {
  if (target.hasAttribute("data-check-title")) {

    target.parentElement.style.display = "none";
    const text = target.textContent.trim() === "Чек-лист" ? '' : target.textContent ;
    addInput( target.parentElement, target.textContent, "input-add__modal", text, (value) => {
      target.textContent = value;
      const id = target
        .closest("[data-check-id]")
        .getAttribute("data-check-id");
      card.changeChecklistTitle(id, value);
      target.parentElement.style.display = "";
      patchReq(link, {title: value}, card.getPath(), 'checklists', id)
    });
  }
}

export default changeChecklistTitle;