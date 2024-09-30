let adminButton = document.querySelector(".admin-button");
let userButton = document.querySelector(".user-button");

adminButton.addEventListener("click", () => {
  window.location.href = "adminPage.html";
});

userButton.addEventListener("click", () => {
  window.location.href = "../homepage.html";
});
