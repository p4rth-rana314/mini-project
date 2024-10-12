export let Events = JSON.parse(localStorage.getItem("Events"));

if (!Events) {
  Events = [
    {
      name: "Chess",
      date: "2024-10-13",
      eventId: 1,
      players: ["dishank.parmar", "zaisha.parmar"],
      description: "",
    },
    {
      name: "Carrom",
      date: "2024-10-12",
      eventId: 2,
      players: ["dishank.parmar", "zaisha.parmar"],
      description: "",
    },
    {
      name: "Table Tennis",
      date: "2024-10-11",
      eventId: 3,
      players: ["dishank.parmar", "zaisha.parmar"],
      description: "",
    },
    {
      name: "Football",
      date: "2024-10-12",
      eventId: 4,
      players: ["dishank.parmar", "zaisha.parmar"],
      description: "",
    },
  ];
}
