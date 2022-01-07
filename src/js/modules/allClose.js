const allClose = () => {
  const main = document.querySelector('.main');
  main.addEventListener('click', (e) => {
    if (e.target === main) {
      try{
        document.querySelectorAll('.input-btn .btn')[1].click();
      }catch(e){}
      document.querySelector('.board-list-items').classList.add('hide');
      const res = document.querySelector('.search-results')
      res.classList.add('hide');
      res.textContent = ''
    }
  })
}

export default allClose;