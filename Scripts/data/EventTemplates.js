export let Events = JSON.parse(localStorage.getItem("Events"));

if (!Events) {
  Events = [
    {
      Image:"https://th.bing.com/th/id/OIP.wUumIiA4DCJzvztsHVbjZQHaFE?rs=1&pid=ImgDetMain",
      name: "Chess",
      date: "2024-12-13",
      eventId: "1a",
      players: ["dishank.parmar", "zaisha.parmar"],
      description: "",
    },
    {
      name: "Carrom",
      date: "2024-10-12",
      eventId: "2a",
      players: ["dishank.parmar", "zaisha.parmar", "someone"],
      description: "",
    },
    {
      name: "Table Tennis",
      date: "2024-12-11",
      eventId: "3a",
      players: ["dishank.parmar", "zaisha.parmar"],
      description: "",
    },
    {
      name: "Football",
      date: "2024-12-12",
      eventId: "4a",
      players: ["dishank.parmar", "zaisha.parmar"],
      description: "",
    },
  ];
}

export function save() {
  localStorage.setItem("Events", JSON.stringify(Events));
}
