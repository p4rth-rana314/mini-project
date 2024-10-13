import { currentDate } from "./Utils/today.js";
import { Events } from "./data/EventTemplates.js";
document.querySelector(".butt").addEventListener("click", () => {
  console.log(document.querySelector(".date").value);
});

document.querySelector(".clear").addEventListener("click", () => {
  localStorage.removeItem("Events");
});

console.log(Events[0].players.length);
