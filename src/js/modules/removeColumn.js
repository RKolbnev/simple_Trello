const removeColumn = () => {
  const main = document.querySelector('.main');
  main.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-delete')) {
      e.target.parentElement.parentElement.remove();
    }
  })
}

export default removeColumn;