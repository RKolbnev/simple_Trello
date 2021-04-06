import addInput from '../addInput';

function changeChecklistTitle(target, card) {
  if (target.hasAttribute("data-check-title")) {
    const callback = (value) => {
      target.textContent = value;
      const id = target
        .closest("[data-check-id]")
        .getAttribute("data-check-id");
      card.changeChecklistTitle(id, value);
      target.parentElement.style.display = "";
    };
    target.parentElement.style.display = "none";
    const text = target.textContent.trim() === "Чек-лист" ? '' : target.textContent ;
    addInput( target.parentElement, target.textContent, callback, "input-add__modal", text);
  }
}

export default changeChecklistTitle;