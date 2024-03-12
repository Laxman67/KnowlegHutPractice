import Product from "./Product";
import { descriptionsymbol, nameSymbol } from "./ProtectedKeys";
class Book extends Product {
  #isbn;
  #author;
  #genre;
  #type = "Book";
  constructor(
    name,
    cost,
    acceptingOrders,
    quantity,
    description,
    author,
    isbn,
    genre
  ) {
    super(name, cost, acceptingOrders, quantity, description);
    this.#author = author;
    this.#isbn = isbn;
    this.#genre = genre;
  }
  get getType() {
    return this.#type;
  }

  get getDescription() {
    return `
    Description :${this[descriptionsymbol]}
    Author: ${this.#author}
    ISBN :${this.#isbn}
    Genre :${this.#genre}
    `;
  }

  get getName() {
    return ` ${this[nameSymbol]} by ${this.#author}`;
  }
}

export default Book;
