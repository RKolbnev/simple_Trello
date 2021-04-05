const changeBg = (target, card, cardElem, place) => {
  if (target.hasAttribute('data-card-bg')) {
    if (place.parentElement.querySelector('.modal-bg-popup')) {
      return;
    }
    const columnBg = cardElem.querySelector("[data-column-card-bg]");
    const modalBg = target === place ? target.closest(".modal").querySelector(".modal-close") : null;
    const modifyClass = target === place ? 'bg__modal' : 'bg__menu';
    place = place.parentElement;

    const bgComponent = document.createElement("div");
    bgComponent.classList.add("modal-bg-popup", modifyClass);
    bgComponent.innerHTML = `
      <p>Цвета</p>
      <div class="modal-bg-color">
        <span data-bg="red"></span>
        <span data-bg="blue"></span>
        <span data-bg="green"></span>
        <span data-bg="yellow"></span>
        <span data-bg="darkred"></span>
        <span data-bg="darkgreen"></span>
        <span data-bg="darkblue"></span>
        <span data-bg="darkgrey"></span>
      </div>
      <button data-delete-bg>Удалить обложку</button>
    `;

    bgComponent.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-bg')) {
        const color = getComputedStyle(e.target).backgroundColor;
        columnBg.classList.add("column-item__bg");
        columnBg.style.backgroundColor = color;
        card.addBackground(color);
        if (modalBg) {
          if (!modalBg.classList.contains("modal__bg")) {
            modalBg.classList.add("modal__bg");
          }
          modalBg.style.backgroundColor = color;
        }
      }

      if (e.target.hasAttribute('data-delete-bg')) {
        columnBg.classList.remove("column-item__bg");
        columnBg.style.backgroundColor = 'transparent';
        card.addBackground(null);
        if (modalBg) {
          modalBg.classList.remove("modal__bg");
          modalBg.style.backgroundColor = "transparent";
        }
      }
      if (!modalBg) {
        place.children[0].remove();
        place.prepend(cardElem.cloneNode(true));
      }
      bgComponent.remove();
    })
    place.append(bgComponent);
  }
};

export default changeBg;