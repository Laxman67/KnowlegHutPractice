const inputEl = document.getElementById("input");

inputEl.addEventListener("change", function (e) {
  e.target.value.length === 0
    ? (this.style.border = "3px solid red")
    : (this.style.border = "3px solid green");
});
