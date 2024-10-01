import { Events } from "./data/EventTemplates.js";
import { save } from "./data/Temp.js";


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

main.innerHTML = mainHTML;

document.querySelectorAll(".event").forEach((event) => {
  event.addEventListener("click", () => {
    
    //eventName = event.dataset.eventname;
    save(event.dataset.eventname);
    console.log(event.dataset.eventname);
    window.location.href = "UserEventPage.html";
  });
});
