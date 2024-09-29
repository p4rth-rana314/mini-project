import { event } from "./data/EventTemplates.js";

let main = document.querySelector('.main');

let mainHTML = '';

event.forEach((eventTile) => {
  let html = `<div class="event">
                <div class="tile">
                    ${eventTile.name}
                </div>
                <div class="about">Hello!</div>
              </div>`;

  mainHTML += html;
})

main.innerHTML = mainHTML;
console.log(mainHTML);