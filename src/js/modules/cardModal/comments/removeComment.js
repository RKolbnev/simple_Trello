import {deleteData} from '../../../services/services';
import {link} from '../../../index';
function removeComment(target, card) {
  if (target.hasAttribute('data-delete-comment')) {
    const id = target.closest('[data-comment-id]').getAttribute('data-comment-id');
    target.parentElement.parentElement.remove();
    card.removeComment(id);
    deleteData(link, card.column.boardId, 'columns', card.column.id, 'cards', card.id, 'comments', id);
  }
}

export default removeComment;