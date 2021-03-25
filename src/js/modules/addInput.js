
const addInput = (element, placeholder, callback, className) => {
  const input = document.createElement('div');
  input.classList.add('input-add', className);
  input.innerHTML = `
    <input type="text" placeholder="${placeholder}">
    <div class="input-btn">
      <button class="btn" type="button">Добавить</button>
      <button class="btn" type="button">&times;</button>
    </div>
  `;

  element.before(input);
  if (className == 'input-add__modal') {
    input.children[0].value = placeholder;
  }
  input.children[1].addEventListener("click", add);
  input.children[0].addEventListener("keypress", add);

  function add(e) {
    if (e.key && e.key !== "Enter") return;
    if (e.target.textContent === "Добавить" || e.key === "Enter") {
      const value = this.parentElement.children[0].value;
      if (value.length == 0) {
        return;
      }
      callback(value);
    }
    this.parentElement.nextElementSibling.style.display = '';
    this.parentElement.remove();
  }
}

export default addInput;


  // Удалаять ли элемент который вызывает функцию
  // Что делать с данными которые получает инпут.
  // Передавать стартовые данные для инпута

  // ! Сделать функцию универсальной