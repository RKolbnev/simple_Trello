function removeComment(target, card) {
  if (target.hasAttribute('data-delete-comment')) {
    const value = target.previousElementSibling.textContent;
    const date = target.parentElement.nextElementSibling.textContent;
    target.parentElement.parentElement.remove();
    card.removeComment(value, date);
  }
}

export default removeComment;