let jokes = document.querySelector("#joke");
let refereshEl = document.querySelector("#referesh");

// API Request URL
const url = "https://icanhazdadjoke.com/";

// XHR Constructor
let xhr = new XMLHttpRequest();

xhr.addEventListener("load", function () {
  jokes.innerHTML = `<h1>${this.response}</h1>`;
});

refereshEl.addEventListener("click", () => {
  // .open('type',url)
  xhr.open("GET", url);
  xhr.setRequestHeader("Accept", "text/plain");
  xhr.send();
});
