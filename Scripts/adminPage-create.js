import { Events } from "./data/EventTemplates.js";

const main = document.querySelector(".main-area");
const customButton = document.querySelector(".custom-butt");

customButton.addEventListener("click", () => {
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
        eventId: crypto.randomUUID(), // Ensure unique event ID
        description: document.querySelector(".description").value,
      });
      localStorage.setItem("Events", JSON.stringify(Events)); // Save the newly added event
      alert("Event added successfully!");
    } else {
      alert("Please fill in all fields correctly.");
    }
  });
});
