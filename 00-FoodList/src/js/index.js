import { worker } from "../api/browser";

if (import.meta.env.DEV) {
  import("../api/browser").then(({ worker }) =>
    worker
      .start()
      .then(() => fetch("/dishes").then((res) => console.log(res.json()))),
  );
}

let allDishes = document.getElementById("allDishes");
let content = "";

function renderMenu(menu) {
  if (menu === "") {
    allDishes.innerHTML = "";
  }
  content = "";

  menu.forEach((item) => {
    let newDish = `<div class="dish">
    <img src="${item.image}" alt=${item.title} srcset="">
    <div class="dishOuter">
      <div class="dishInner">
        <h3 class="dishName">${item.title}</h3>
        <h3 class="dishPrice">$${item.price}</h3>
      </div>
      <p>${item.description}!</p>
    </div>
    </div>`;
    content += newDish;
    allDishes.innerHTML = content;
  });
}

renderMenu(menu);

let allButtons = document.querySelectorAll("#allButtons button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    filterItems(e.target.innerText);
  });
});

function filterItems(category) {
  let filtered = menu.filter(
    (dish) => dish.category.toLowerCase() === category.toLowerCase(),
  );
  if (filtered === "") {
    renderMenu(filterItems);
  }
  renderMenu(filtered);
}
