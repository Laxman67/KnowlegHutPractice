import { getNews, getNewsBackup } from "./api";
const newsListEl = document.querySelector("#newsList");
const getNewsBtn = document.querySelector("#getNewsBtn");
const spinner = document.querySelector("#spinner");
const errorEl = document.querySelector("#error");
const sourceEl = document.querySelector("#source");

// Promisify getNews()
const getNewsPromise = () =>
  new Promise((resolve, reject) => {
    getNews((error, news, source) => {
      if (error) reject();
      resolve([news, source]);
    });
  });

// Promisify getNewBackup()

const getNewsBackupPromise = () =>
  new Promise((resolve, reject) => {
    getNewsBackup((error, news, source) => {
      if (error) reject();
      resolve([news, source]);
    });
  });

const handleSuccess = function (news, source) {
  errorEl.style.display = "none";
  const listElems = news.map((el) => `<li>${el.content}</li>`).join("");
  newsListEl.innerHTML = listElems;
  sourceEl.innerText = `Source: ${source}`;
  sourceEl.style.display = "inline-block";
};

const handleError = function () {
  errorEl.style.display = "block";
};

getNewsBtn.addEventListener("click", function () {
  newsListEl.innerHTML = "";
  spinner.style.display = "block";
  sourceEl.style.display = "none";

  // Fetch data and render

  // getNews((error, news, source) => {
  //   if (error) return handleError();
  //   handleSuccess(news, source);
  //   spinner.style.display = "none";
  // });

  // getNewsPromise()
  //   .then(([news, source]) => {
  //     handleSuccess(news, source);
  //   })
  //   .catch((error) => {
  //     handleError();
  //   })
  //   .finally(() => {
  //     spinner.style.display = "none";
  //   });

  Promise.any([getNewsPromise(), getNewsBackupPromise()])
    .then(([news, source]) => {
      handleSuccess(news, source);
    })
    .catch((error) => {
      handleError();
    })
    .finally(() => {
      spinner.style.display = "none";
    });
});
