import addInput from "../addInput";

function changeDesc(target, card, place) {
  if (target.hasAttribute('data-card-desc')) {
    place.style.display = 'none';
    const callback = (value) => {
      if (place === target) {
        target.textContent = value;
      }
      card.addDesc(value);
    }
    let placeholder = card.desc ? card.desc : 'Добавить описание';
    let className = "input-add__" + (place === target ? "modal" : "menu");
    let text = card.desc ? card.desc : '';
    addInput(place, placeholder, callback, className, text);
  }
}

export default changeDesc;