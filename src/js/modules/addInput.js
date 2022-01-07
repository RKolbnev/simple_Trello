
const addInput = (element, placeholder, className, inputText, callback) => {
  // Если Input уже есть на странице
  if (document.querySelector(".input-add")) {
    const input = document.querySelector(".input-add");
    const nextElement = input.nextElementSibling;
    input.remove();
    nextElement.style.display = "";
  }
  const input = document.createElement("div");
  input.classList.add("input-add", className);
  input.innerHTML = `
    <input type="text" placeholder="${placeholder}">
    <div class="input-btn">
      <button class="btn" type="button">Добавить</button>
      <button class="btn" type="button">&times;</button>
    </div>
  `;

  element.before(input);
  inputText ? (input.children[0].value = inputText) : "";
  input.children[1].addEventListener("click", add);
  input.children[0].addEventListener("keypress", add);

  function add(e) {
    if (e.key && e.key !== "Enter") return;
    if (e.target.textContent === "Добавить" || e.key === "Enter") {
      const value = this.parentElement.children[0].value.trim();
      if (value.length == 0) {
        return;
      }
      callback(value);
    }
    try {
      this.parentElement.nextElementSibling.style.display = "";
    } catch (error) {}
    this.parentElement.remove();
  }
};

export default addInput;