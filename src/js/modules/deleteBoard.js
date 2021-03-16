const deleteBoard = () => {
  const mainSection = document.querySelector('.main');
  mainSection.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.hasAttribute('data-delete')) {
      e.target.parentElement.parentElement.remove();
    }
  })



}


export default deleteBoard;