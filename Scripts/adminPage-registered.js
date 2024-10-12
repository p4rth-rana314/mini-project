import { Events } from "./data/EventTemplates.js";

const main = document.querySelector(".main-area");
let mainHTML = "";
let nothing = [];

Events.forEach((eventTile) => {
  let html = `<div data-eventname="${eventTile.name}" class="event">
                <div class="tile">
                    ${eventTile.name}
                </div>
                <div class="about">
                  Hello!
                  <button class="delete-button" data-id="${eventTile.eventId}">Delete Event</button>
                  <button>Modify</button>
                </div>
              </div>`;

  mainHTML += html;
});

main.innerHTML = mainHTML;
const deleteButt = document.querySelectorAll(".delete-button");

deleteButt.forEach((button) => {
  //console.log(button.dataset.id);

  button.addEventListener("click", () => {
    for (let i = 0; i < Events.length; i++) {
      //console.log(Events[i].eventId);
      //console.log(button.dataset.id);
      if (Events[i].eventId == button.dataset.id) {
        console.log("deleted");
        Events.splice(i, 1);
        localStorage.setItem("Events", JSON.stringify(Events));
        location.reload();
      }
    }
  });
});
