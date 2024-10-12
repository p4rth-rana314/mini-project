import { Events } from "./data/EventTemplates.js";

let main = document.querySelector(".main-bar");

function button1() {
  document.querySelector(".Add-event-butt").addEventListener("click", () => {
    main.innerHTML = `
      <div class="header">Custom Event</div>
      <div>Name: <input class="name" /></div>
      <div class="description">Enter description of event: <input /></div>
      <div>Date of event: <input class="event-date" type="date" /></div>
      <div class="venue">Venue: <input /></div>
      <button class="add-button">Add</button>`;

    document.querySelector(".add-button").addEventListener("click", () => {
      const name = document.querySelector(".name").value;
      const date = document.querySelector(".event-date").value;

      if (name && date) {
        Events.push({
          name: name,
          date: date,
          eventId: Events.length + 1, // Ensure unique event ID
        });
        localStorage.setItem("Events", JSON.stringify(Events)); // Save the newly added event
        alert("Event added successfully!");
      } else {
        alert("Please fill in all fields correctly.");
      }
    });
  });
}

function button2() {
  document.querySelector(".Delete-event-butt").addEventListener("click", () => {
    main.innerHTML = `
      <div class="header">Delete Event</div>
      <div>Name: <input class="name" /></div>
      <button class="delete-button"> DELETE </button>`;

    document.querySelector(".delete-button").addEventListener("click", () => {
      const name = document.querySelector(".name").value;
      let found = false;

      for (let i = 0; i < Events.length; i++) {
        if (name === Events[i].name) {
          Events.splice(i, 1);
          localStorage.setItem("Events", JSON.stringify(Events));
          alert("Event removed successfully");
          found = true;
          break;
        }
      }

      if (!found) {
        alert("Please fill in all fields correctly.");
      }
    });
  });
}



button1();
button2();
