// https://www.googleapis.com/books/v1/volumes?q=quilting

let searchButton = document.getElementById("seachButton");
searchButton.addEventListener("click", fetchData);
let allBookEl = document.getElementById("allBooks");
let content = "";
async function fetchData() {
  // 1. read input
  let bookTitle = document.getElementById("bookTitle").value;
  //   2.Create request

  //   let myRequest = new XMLHttpRequest(); //readystate=0
  //   myRequest.open(
  //     "GET",
  //     `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}` // readystate =1
  //   );
  //   3.send the request and recive response
  //   myRequest.send();
  // readystate= 2 -----server processing: readystate=3 ------response : readystate=4

  //   4.Convert response to object
  //   myRequest.onreadystatechange = () => {
  //     if (myRequest.readyState === 4 && myRequest.status === 200) {
  let response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
  );
  let convertedBooks = await response.json();

  let newbook = convertedBooks.items
    .map(
      (book) =>
        `<div class="book">
            <img src=${book.volumeInfo.imageLinks.thumbnail}>
            <h3>${book.volumeInfo.title}</h3>
            <p>${book.volumeInfo.description.slice(0, 100)}....</p>
            </div>`
    )
    .join(" ");
  content += newbook;
  allBookEl.innerHTML = content;
}
//   };
//   5. Display on the front end
// }
