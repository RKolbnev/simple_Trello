import addInput from './addInput';

const modalListener = (modal, card) => {
  modal.addEventListener('click', (e) => {
    // Закрытие модального окна
    if (e.target.hasAttribute("data-delete-modal") || e.target === modal) {
      e.stopPropagation();
      modal.remove();
    }
    // Добавление/изменение описания задачи
    if (e.target.hasAttribute("data-modal-desc")) {
      const callback = (value) => {
        e.target.textContent = value;
        card.addDesc(value);
      };

      e.target.style.display = "none";
      addInput(e.target, e.target.textContent, callback, "input-add__modal");
    }

    // Добавление комментариев
    if (e.target.hasAttribute("data-modal-comments")) {
      const callback = (value) => {
        const wrap = e.target.nextElementSibling;
        const div = document.createElement("div");
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
        card.addComment({ value, date });
      };

      e.target.style.display = "none";
      addInput(e.target, "", callback, "input-add__modal");
    }
    // Открытие popup Bg
    if (e.target.textContent === 'Обложка') {
      e.target.nextElementSibling.classList.toggle('hide');
    }
    // Смена bg
    if (e.target.hasAttribute('data-modal-bg')) {
      const color = window.getComputedStyle(e.target).backgroundColor;
      const bg = modal.querySelector('.modal-close');
      if (!bg.classList.contains('modal__bg')) {
        bg.classList.add('modal__bg');
      }
      bg.style.backgroundColor = color;
      card.addBackground(color);

    }

  })
}

export default modalListener;