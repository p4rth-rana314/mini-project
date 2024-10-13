import { Events, save } from "./data/EventTemplates.js";

let mainHTML = "";

Events.forEach((event) => {
  if (event.eventId === localStorage.getItem("modifyButtonId")) {
    for (let i = 0; i < event.players.length; i++) {
      const html = `${i + 1}. ${event.players[i]}<br>`;
      mainHTML += html;
      console.log;
    }
    document.querySelector(".change-button").addEventListener("click", () => {
      event.date = document.querySelector(".date").value;
      save();
    });
  }
});
document.querySelector(".player-list").innerHTML = mainHTML;
