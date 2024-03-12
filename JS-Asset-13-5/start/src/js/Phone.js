import Product from "./Product";
import { descriptionsymbol } from "./ProtectedKeys";
class Book extends Product {
  #os;
  #ram;
  #storage;
  #color;
  #type = "Phone";
  constructor(
    name,
    cost,
    acceptingOrders,
    quantity,
    description,
    os,
    ram,
    storage,
    color
  ) {
    super(name, cost, acceptingOrders, quantity, description);
    this.#os = os;
    this.#ram = ram;
    this.#storage = storage;
    this.#color = color;
  }
  get getType() {
    return this.#type;
  }

  get getDescription() {
    return `
    Description :${this[descriptionsymbol]}
   OS :${this.#os}
   RAM :${this.#ram}
   Storage :${this.#storage}
   Color :${this.#color}
    `;
  }
}

export default Book;
