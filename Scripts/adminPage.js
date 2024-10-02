import { Events } from "./data/EventTemplates.js";

let main = document.querySelector(".main-area");
button1();

function button1() {
  document.querySelector(".custom-event-butt").addEventListener("click", () => {
    main.innerHTML = `<button class="back-button">Back</button>
      <div class="header">Custom Event</div>
      <div >Name: <input class="name" /></div>
      <div class="description">Enter description of event: <input /></div>
      <div>Date of event: <input class="event-date" type="date" /></div>
      <div class="venue">Venue: <input /></div>
      <button class="add-button">Add</button>`;
    button2();

    document.querySelector(".add-button").addEventListener("click", () => {
      let id = crypto.randomUUID();
      Events.push({
        name: document.querySelector(".name").value,
        date: document.querySelector(".event-date").value,
        eventId: id,
      });
      localStorage.setItem("Events", JSON.stringify(Events)); //saves the newely added event and displays it on homepage
    });
  });
}

function button2() {
  document.querySelector(".back-button").addEventListener("click", () => {
    main.innerHTML = `<button class="custom-event-butt">Custom event</button>
      <button class="existing-template">Template-1</button>
      <button class="existing-template">Template-2</button>`;
    button1();
  });
}
