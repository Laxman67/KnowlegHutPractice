class Product {
  constructor(name, cost, acceptingOption, quantity, descrition) {
    this.name = name;
    this.cost = cost;
    this.acceptingOption = acceptingOption;
    this.quantity = quantity;
    this.descrition = descrition;
  }
  stockCost() {
    return this.cost * this.quantity;
  }

  getDesc() {
    return this.descrition;
  }

  render() {
    // Product
    const productCard = document.createElement("div");
    productCard.setAttribute("class", "product");

    // Product name
    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("class", "name");

    // cost
    const costDiv = document.createElement("div");
    nameDiv.setAttribute("class", "cost");

    // quantity
    const quantityDiv = document.createElement("div");
    nameDiv.setAttribute("class", "quantity");

    // stock qnty
    const stockCost = document.createElement("div");
    nameDiv.setAttribute("class", "stock-cost");
    const stockBtn = document.createElement("button");
    stockBtn.innerText = "Stock Cost";
    stockBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      alert(`Total Cost : ${this.stockCost()}`);
    });

    stockCost.append(stockBtn);

    // DEscription
    const viewDesc = document.createElement("div");
    viewDesc.setAttribute("class", "view-description");

    const viewDescBtn = document.createElement("button");
    viewDescBtn.innerText = "Description";
    viewDescBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      alert(`Description :  ${this.getDesc()}`);
    });
    viewDesc.append(viewDescBtn);

    // buy button

    const buyBtnDiv = document.createElement("div");
    buyBtnDiv.setAttribute("class", "buy-btn");

    const buyBtn = document.createElement("button");
    buyBtn.innerText = "Buy";
    buyBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      alert(``);
    });
  }
}

export default Product;
