const closeModal = (event, modalWindow) => {
  if (event.target.hasAttribute("data-modal-close") || event.target === modalWindow) {
    event.stopPropagation();
    modalWindow.remove();
  }
}

export default closeModal;