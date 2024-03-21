// Write your code here...
const container = document.querySelector(".list");
const total = document.querySelector(".total");
const loadCartBtn = document.querySelector("#load-cart-btn");

const Row = ({ product, price }) =>
  `<div class="product">
    <span class="prod-name">${product}</span>
    <span class="prod-cost">$${price}</span>
  </div>`;

const render = function (arr) {
  const elems = arr.map((e) => Row(e));
  const totalCost = arr.reduce((prev, curr) => prev + Number(curr.price), 0);

  container.innerHTML = elems.join("");
  total.innerHTML = Row({ product: "TOTAL", price: totalCost });
};

const getData = (uri) => {
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // Response
    xhr.addEventListener("load", function () {
      resolve(JSON.parse(this.response));
    });

    // Promise Reject in error
    xhr.addEventListener("error", () => reject());
    xhr.open("GET", uri);
    xhr.send();
  });
};

loadCartBtn.addEventListener("click", async () => {
  try {
    const products = await getData("//localhost:3000/products");
    render(products);
  } catch (error) {
    alert(`There was an error talking to the server ${error}`);
  }
});
