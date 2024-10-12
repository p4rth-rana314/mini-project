import { currentDate } from "./Utils/today.js";
document.querySelector(".butt").addEventListener("click", () => {
  console.log(document.querySelector(".date").value);
});

document.querySelector(".clear").addEventListener("click", () => {
  localStorage.removeItem("Events");
});
