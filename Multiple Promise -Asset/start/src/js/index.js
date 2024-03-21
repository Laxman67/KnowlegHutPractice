// Write your code here...
import { getMessages, prefixDate, getComments } from "../api";
import { renderContent } from "../utils";
const messagesContainer = document.querySelector("#messages");
const getMessageBtn = document.querySelector("#getMessages");
const spinner = document.querySelector("#spinner");
const errorEl = document.querySelector("#error");

getMessageBtn.addEventListener("click", async () => {
  spinner.style.display = "block";
  messagesContainer.innerHTML = "";
  error.innerText = "";

  //Message
  // getMessages().then((res) => console.log(res));
  //Comments
  // getComments().then((res) => console.log(res));

  //render

  //****************** */ Promise.all / Promise.allSettled****************

  // Promise.allSettled([getComments(), getMessages()])
  //   .then((res) => {
  //     if (res[1].status === "rejected") return Promise.reject(res[1].reason);
  //     return res;
  //   })
  //   .then(([{ value: message }, { value: comments }]) =>
  //     renderContent(message, comments, messagesContainer)
  //   )
  //   .catch((error) => (errorEl.innerText = `Error : ${error}`))
  //   .finally(() => (spinner.style.display = "none"));

  try {
    const messages = await getMessages();
    const updatedMessage = await prefixDate(messages);
    const comments = await getComments();
    renderContent(updatedMessage, comments, messagesContainer);
  } catch (error) {
    errorEl.innerText = `Error: ${error}`;
  }
  spinner.style.display = "none";
});
