const lightTheme = document.querySelector("#light");
const darkTheme = document.querySelector("#dark");
const inputContent = document.querySelector(".input-data .content");
const outputContent = document.querySelector(".output-data .content");
const startBtn = document.querySelector("#start");
// Theme management
lightTheme.addEventListener("click", () => {
  document.body.classList = "light-body";
});

darkTheme.addEventListener("click", () => {
  document.body.classList = "dark-body";
});

// Worker Constructor
let computeWorker = new Worker("worker.js");

const inputData = [56e7, 76e8, 62e7, 12e8];

startBtn.addEventListener("click", () => {
  // Promise.all(inputData.map((data) => computeTotal(data))).then((res) => {
  //   res.forEach((e) => (outputContent.innerHTML += `<h4>${e}</h4>`));
  // });
  outputContent.innerHTML = "";
  startBtn.setAttribute("disabled", true);
  computeWorker.postMessage(inputData);
});

computeWorker.addEventListener("message", function ({ data }) {
  if (data.type === "data") {
    let { result, time } = data.message;
    outputContent.innerHTML = `<h4>${result} | (${time}ms)</h4>`;
  }

  if (data.type == "exit") {
    startBtn.setAttribute("disabled", false);
  }
});
