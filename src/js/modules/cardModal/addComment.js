import addInput from '../addInput';

function addComment(target, card) {
  if (target.hasAttribute("data-modal-comments")) {
    const callback = (value) => {
      const wrap = target.nextElementSibling;
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
        <div>
          <p>${value}</p>
          <span data-delete-comment>&times;</span>
        </div>
        <span>${date}</span>
      `;
      wrap.prepend(div);
      card.addComment({ value, date });
    };

    target.style.display = "none";
    addInput(target, "", callback, "input-add__modal");
  }
}

export default addComment;