import { UserInfo } from "./data/UserInfoData.js";
import { saveCurrentUser, currentUser } from "./data/CurrentUser.js";

export let username1 = 'someusername'; 
let username = document.querySelector(".username-text-box");
let password = document.querySelector(".password-text-box");
let isWrong = true;
document.querySelector(".sign-in-button").addEventListener("click", () => {
  for (let i = 0; i < UserInfo.length; i++) {
    if (UserInfo[i].userName === username.value && UserInfo[i].password === password.value) {
      isWrong = false;
      break;
    } else {
      isWrong = true;
    }
  }
  if (isWrong) {
    username.value = "";
    password.value = "";
    document.querySelector(".wrong-info-alert").innerHTML = `Wrong username or password`;
    console.log("no match");
  } else {
    console.log("match");
    document.querySelector(".wrong-info-alert").innerHTML = ``;
    saveCurrentUser(username.value);
    username1 = username.value;
    console.log(currentUser);
    window.location.href = "../collegeList.html";
  }
});
