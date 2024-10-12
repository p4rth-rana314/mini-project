let now = new Date();

export let year = now.getFullYear();
export let month = (now.getMonth() + 1).toString().padStart(2, "0");
export let day = now.getDate().toString().padStart(2, "0");
export let currentDate = `${year}-${month}-${day}`;
