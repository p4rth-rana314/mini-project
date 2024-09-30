import { Events } from "./data/EventTemplates.js";

let main = document.querySelector(".main");
let mainHTML = "";

Events.forEach((eventTile) => {
  let html = `<div class="event">
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
    window.location.href = "UserEventPage.html";
  });
});

//console.log(mainHTML);
