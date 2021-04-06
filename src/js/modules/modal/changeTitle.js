import addInput from '../addInput';

const changeTitle = (target, card, place) => {
  if (target.hasAttribute('data-card-title')) {
    const callback = (value) => {
      card.domElement.querySelector('[data-column-card-title]').textContent = value;
      card.setTitle(value);
      if (target === place) {
        target.textContent = value;
      } else {
        const parent = place.parentElement;
        parent.textContent = '';
        parent.append(card.domElement.cloneNode(true));
      }
    };
    place.style.display = 'none';
    let className = "input-add__" + (target.closest('.modal') ? "modal" : "menu");
    addInput(place, card.title, callback, className, card.title);
  }
};

export default changeTitle;