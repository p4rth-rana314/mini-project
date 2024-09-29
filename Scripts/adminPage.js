let main = document.querySelector(".main-area");
button1();

function button1() {
  document.querySelector(".custom-event-butt").addEventListener("click", () => {
    main.innerHTML = `<button class="back-button">Back</button>
      <div class="header">Custom Event</div>
      <div class="name">Name: <input /></div>
      <div class="description">Enter description of event: <input /></div>
      <div class="event-date">Date of event: <input type="date" /></div>
      <div class="venue">Venue: <input /></div>`;
    button2();
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
