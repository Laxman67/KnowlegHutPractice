// Write your code here...
import { getMessages, getComments } from "../api";
import { renderContent } from "../utils";
const messagesContainer = document.querySelector("#messages");
const getMessageBtn = document.querySelector("#getMessages");
const spinner = document.querySelector("#spinner");
const errorEl = document.querySelector("#error");

getMessageBtn.addEventListener("click", () => {
  spinner.style.display = "block";
  messagesContainer.innerHTML = "";
  error.innerText = "";
  //Fetch Message
  //Fetch Comments
  // render message + comment
  //Hide the spinner
});
