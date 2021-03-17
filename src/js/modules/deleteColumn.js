const deleteColumn = () => {
  const mainSection = document.querySelector('.main');
  mainSection.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-delete')) {
      e.target.parentElement.parentElement.remove();
    }
  })
}


export default deleteColumn;