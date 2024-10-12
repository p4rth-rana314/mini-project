export let currentUser ='';

export function saveCurrentUser (userName) {
  //localStorage.setItem('currentUser',userName);
  currentUser = userName;
}