import { Events } from "./data/EventTemplates.js";

export let eventName;
let main = document.querySelector(".main");
let mainHTML = "";

Events.forEach((eventTile) => {
  let html = `<div data-eventname="${eventTile.name}" class="event">
                <div class="tile">
                    ${eventTile.name}
                </div>
                <div class="about">Hello!</div>
              </div>`;

  mainHTML += html;
});

console.log(mainHTML);
//main.innerHTML = mainHTML;
console.log(mainHTML);

document.querySelectorAll(".event").forEach((event) => {
  event.addEventListener("click", () => {
    eventName = event.dataset.eventname;
    window.location.href = "UserEventPage.html";
  });
});
