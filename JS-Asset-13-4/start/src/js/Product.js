class Product {
  #name; //private instance field
  #cost;
  #acceptingOrders;
  #quantity;
  #description;
  #discount = 0;
  static #tax = 10; //private static field

  constructor(name, cost, acceptingOrders, quantity, description) {
    this.#name = name;
    this.#cost = cost;
    this.#acceptingOrders = acceptingOrders;
    this.#quantity = quantity;
    this.#description = description;
  }

  #computeTax() {
    //private instance method
    return (Product.#tax / 100) * this.#cost;
  }
  set setDiscount(x) {
    this.#discount = x;
  }
  get stockCost() {
    let stockCost = this.#computeTax + this.#cost * this.#quantity;
    let discAmt = (this.#discount / 100) * stockCost;
    return this.#discount !== 0 ? stockCost - discAmt : stockCost;
  }

  get getName() {
    return this.#name;
  }

  get getCost() {
    return this.#cost;
  }

  get getAcceptingOrders() {
    return this.#acceptingOrders;
  }

  get getDescription() {
    return this.#description;
  }

  get getQuantity() {
    return this.#quantity;
  }
}

export default Product;
