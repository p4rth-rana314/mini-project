import { CollegeList } from "./data/ListOfColleges.js"; //gets the array list of colleges from the file mentioned

let list = document.querySelector(".college-list"); //this selects the div in which the list of colleges will be. html generated will be inside this div

function generateCollegeList() {
  let collegeHTML = "";

  CollegeList.forEach((college) => {
    let html = `<div class="college">${college.name}</div>`;
    collegeHTML += html;
  });

  list.innerHTML = collegeHTML;
  console.log(collegeHTML);

  document.querySelectorAll(".college").forEach((div) => {
    div.addEventListener("click", () => {
      window.location.href = "../HTML/select.html";
    });
  }); //this function says that if we click any of the college names, it will take us to next page
} //this function genrates htrml for each college and displayes them on page
generateCollegeList();
