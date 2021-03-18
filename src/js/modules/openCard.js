import { store } from "../index";

const openCard = () => {
  const main = document.querySelector(".main");

  main.addEventListener("click", (e) => {
    let target;
    if (e.target.hasAttribute("data-card-id")) {
      target = e.target;
    } else if (e.target.parentElement.hasAttribute("data-card-id")) {
      target = e.target.parentElement;
    }

    if (target) {
      const parent = target.parentElement.parentElement;
      const idCard = target.getAttribute("data-card-id");
      const idColumn = parent.getAttribute('data-column-id')
      const card = store[idColumn].cards[idCard];


    }
  });
};


export {openCard};