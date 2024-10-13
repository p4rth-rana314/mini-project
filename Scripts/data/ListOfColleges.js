export let CollegeList = JSON.parse(localStorage.getItem("CollegeList"));

if (!CollegeList) {
  CollegeList = [
    {
      name: "KJSIT",
    },
    {
      name: "DJ Sanghvi",
    },
    {
      name: "VJIT",
    },
  ];
}
