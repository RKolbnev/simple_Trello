import addInput from './addInput';

const modalListener = (modal, card) => {
  modal.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-delete-modal') || e.target === modal) {
      e.stopPropagation();
      modal.remove();
    }
    if (e.target.hasAttribute('data-modal-desc')) {
      const callback = (value) => {
        e.target.textContent = value;
        card.addDesc(value);
      }

      e.target.style.display = 'none';
      addInput(e.target, e.target.textContent, callback, "input-add__modal");
    }

    if (e.target.hasAttribute('data-modal-comments')) {
      const callback = (value) => {
        const wrap = e.target.nextElementSibling;
        const div = document.createElement('div');
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        };
        const date = new Date().toLocaleString("ru", options);
        div.innerHTML = `
          <p>${value}</p>
          <span>${date}</span>
        `;
        wrap.prepend(div);
        card.addComment({value, date});
      }

      e.target.style.display = 'none';
      addInput(e.target, '', callback, "input-add__modal")
    }

  })
}

export default modalListener;