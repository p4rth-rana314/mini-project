export let Events = JSON.parse(localStorage.getItem("Events"));

if (!Events) {
  Events = [
    {
      name: "Chess",
      date: "01-01-2024",
      eventId: 1,
      players: ["dishank.parmar", "zaisha.parmar"],
    },
    {
      name: "Carrom",
      date: "02-01-2024",
      eventId: 2,
      players: ["dishank.parmar", "zaisha.parmar"],
    },
    {
      name: "Table Tennis",
      date: "03-01-2024",
      eventId: 3,
      players: ["dishank.parmar", "zaisha.parmar"],
    },
    {
      name: "Football",
      date: "04-01-2024",
      eventId: 4,
      players: ["dishank.parmar", "zaisha.parmar"],
    },
    {
      name: "Table Tennis",
      date: "03-01-2024",
      eventId: 3,
      players: ["dishank.parmar", "zaisha.parmar"],
    },
    {
      name: "Table Tennis",
      date: "03-01-2024",
      eventId: 4,
      players: ["dishank.parmar", "zaisha.parmar"],
    },
  ];
}
