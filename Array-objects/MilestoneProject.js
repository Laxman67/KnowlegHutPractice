{
  {
    // Collection of books --Array of Object
    // let allBooks = [
    //   {
    //     id: 1,
    //     title: "Catching Fire",
    //     author: "Anonymous",
    //     rating: [3.0, 3.5, 4.7, 3.1], //array of number
    //     reviews: [
    //       {
    //         name: "John",
    //         content:
    //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo expedita temporibus inventore ipsum fuga laboriosam id quo dignissimos.",
    //       },
    //       {
    //         name: "Jane",
    //         content:
    //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo expedita temporibus inventore ipsum fuga laboriosam id quo dignissimos.",
    //       },
    //       {
    //         name: "Danny",
    //         content:
    //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo expedita temporibus inventore ipsum fuga laboriosam id quo dignissimos.",
    //       },
    //       {
    //         name: "Bob",
    //         content:
    //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo expedita temporibus inventore ipsum fuga laboriosam id quo dignissimos.",
    //       },
    //     ],
    //   },
    // ];

    function Book(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.id = Date.now().toString();
      this.rating = [];
      this.reviews = [];
    }

    // Contructor Function

    const BookCollection = {
      book: [],

      //1. Add a Book
      addBook: function (book) {
        this.book.push(book);
        console.log(
          `Book \"${book.title}\" added successfully with ID:${book.id} !`
        );
      },

      // 2. Removing a Book
      removeBook: function (removeID) {
        let bookToBeRemove = this.book.findIndex(
          (book) => book.id === removeID
        );

        if (bookToBeRemove == -1) {
          console.log(`No book with ID: ${removeID} found in a collection`);
        } else {
          let removeBook = this.book.splice(bookToBeRemove, 1);

          console.log(
            `The book ${removeBook[0].title} is removed from the collection`
          );
        }
      },

      // 3. Search a Book
      searchBook: function (title) {
        let filteredBooks = this.book.filter((book) =>
          book.title.includes(title)
        );

        if (filteredBooks.length == 0) {
          console.log(`No Book Found with the Title : ${title}`);
        } else {
          filteredBooks.forEach((book) =>
            console.log(
              `FOUND: ${book.title} released in ${book.year} written by ${book.author}`
            )
          );
        }
      },

      // 4. Add a Rating

      addRating: function (id, rating) {
        let book = this.book.find((book) => book.id === id);
        if (!book) {
          console.log(`No Book id ${id} found`);
        } else {
          book.rating.push(rating);
          console.log(`Your Rating for the book  -${book.title} is added`);
        }
      },

      //5.  Add a Review
      addReview: function (id, review) {
        let book = this.book.find((book) => book.id === id);
        if (!book) {
          console.log(`No Book id ${id} found`);
        } else {
          book.rating.push(review);
          console.log(`Your Review for the book  -${book.title} is added`);
        }
      },

      //6. Calculate avergae Raing

      calculateAverageRating: function (id) {
        let book = this.book.find((book) => book.id === id);

        let noOfRatings = book.rating.length;
        let totalRating = book.rating.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );

        let averageRating = totalRating / noOfRatings;
        console.log(
          `The average rating  for ${book.title} by ${book.author} is ${averageRating}`
        );
      },
    };

    let choice = -1;
    do {
      console.log(
        `Choose an Option \n1. Add a Book \n2. Remove a Book \n3. Search for a Book \n4. Add a Rating  \n5. Add a Review \n6. Computer avarage of rating\n7. Exit `
      );

      choice = parseInt(prompt("Enter your choice"));

      switch (choice) {
        case 1:
          let title = prompt("Enter the Title :");
          let author = prompt("Enter the Author Name :");
          let year = prompt("Enter the release Year :");
          let newBook = new Book(title, author, year);
          BookCollection.addBook(newBook);
          break;
        case 2:
          let removeID = prompt("Enter the ID of the  book :");
          BookCollection.removeBook(removeID);
          break;
        case 3:
          let searchTitle = prompt("Enter the title you're looking for :");
          BookCollection.searchBook(searchTitle);
          break;
        case 4:
          let ratingID = prompt("Enter the ID of the book you want to rate");
          let rating = parseInt(prompt("Enter the rating (0 to 5)"));
          BookCollection.addRating(ratingID, rating);
          break;
        case 5:
          let reviewID = prompt("Enter the ID of the book you want to review");
          let username = prompt("Enter the username :");
          let content = prompt("Enter the content :");
          let newReview = { username, content };
          BookCollection.addReview(reviewID, newReview);
          break;
        case 6:
          let averageID = prompt(
            "Enter the ID of book you want to see average"
          );

          BookCollection.calculateAverageRating(averageID);
          break;
        case 7:
          console.log("Thanks for Stopping by !");
          break;

        default:
          break;
      }
    } while (choice >= 1 && choice < 7);
  }
}
