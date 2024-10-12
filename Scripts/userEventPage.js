import { currentUser } from "./data/CurrentUser.js";

console.log(localStorage.getItem("eventName"));

document.querySelector(".register-button").addEventListener("click", () => {
  console.log(currentUser);
});
