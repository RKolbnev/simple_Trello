import addInput from '../../addInput';
import {link} from '../..//../index';
import {patchReq} from '../../../services/services';
import idGenerate from '../../idGenerate';

function addComment(target, card) {
  if (target.hasAttribute("data-modal-comments")) {
    target.style.display = "none";
    addInput(target, "Добавте комментарий", "input-add__modal", false, (value) => {
      value = value.trim();
      const wrap = target.nextElementSibling;
      const div = document.createElement("div");
      const id = idGenerate();
      div.setAttribute('data-comment-id', id);
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
      const body = { id, value, date };
      card.addComment(body);
      patchReq(link, body, card.column.boardId, 'columns', card.column.id, 'cards', card.id, 'comments', body.id);
    });
  }
}

export default addComment;