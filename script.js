const inputBox = document.querySelector(".input-box");
const icon = document.querySelector(".material-symbols-outlined");

inputBox.addEventListener("focus", () => {
  icon.style.opacity = "0";
});

inputBox.addEventListener("blur", () => {
  icon.style.opacity = "1";
});
