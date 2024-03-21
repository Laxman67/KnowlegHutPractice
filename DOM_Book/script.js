function Book(title, author, rating) {
  this.title = title;
  this.author = author;
  this.id = Date.now().toString();
  this.rating = rating;
  this.reviews = [];
}

// Contructor Function

const BookCollection = {
  book: JSON.parse(localStorage.getItem("books")) || [],

  //1. Add a Book
  addBook: function () {
    let bookTitle = document.getElementById("bookTitle").value;
    let bookAuthor = document.getElementById("bookAuthor").value;
    let bookRating = document.getElementById("bookRating").value;
    let _book = new Book(bookTitle, bookAuthor, bookRating);
    this.book.push(_book);

    this.displayBook(this.book);
    attachRemoveListner();
    saveForLater();
  },

  // 2. Removing a Book
  removeBook: function (removeID) {
    let bookToBeRemove = this.book.findIndex((book) => book.id === removeID);

    if (bookToBeRemove == -1) {
    } else {
      let removeBook = this.book.splice(bookToBeRemove, 1);
      console.log(removeBook);
      //   display after remove
      this.displayBook(this.book);
    }
  },

  // 3. Search a Book
  searchBook: function (title) {
    let filteredBooks = this.book.filter((book) => book.title.includes(title));

    if (filteredBooks.length == 0) {
    } else {
      this.displayBook(filteredBooks);
    }
  },

  //4.  Add a Review
  addReview: function (id, review) {
    let book = this.book.find((book) => book.id === id);
    if (!book) {
    } else {
      book.rating.push(review);
    }
  },

  //6. Display Book
  displayBook: function (inputArray) {
    let content = "";

    inputArray.forEach((book) => {
      let individualBook = `<div>
    <h2>Title : ${book.title}</h2>
    <h3>Author : ${book.author}</h3>
    <p>Rating : ${book.rating}</p>
    <button class="remove_button" id="${book.id}">Remove</button>
    
    <div/>`;
      content += individualBook;
    });

    // Adding content to bookList
    document.getElementById("allBooks").innerHTML = content;
  },
};

// Display book from localstorge
BookCollection.displayBook(BookCollection.book);

// Add event listner to addBookButton Button

let addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  BookCollection.addBook();
});

// Adding event listner to the remove book Button
function attachRemoveListner() {
  let allRemoveButton = document.querySelectorAll(".remove_button");
  allRemoveButton.forEach((button) => {
    button.addEventListener("click", () => {
      BookCollection.removeBook(button.id);
    });
  });
}

let searchInput = document.getElementById("searcTitle");
searchInput.addEventListener("change", (e) => {
  BookCollection.searchBook(searchInput.value);
});

function saveForLater() {
  localStorage.setItem("books", JSON.stringify(BookCollection.book));
}
