// Creates dat and time formatted and updates element with id="time"
`use strict`;
function setTime() {
  const time = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  time.textContent = formattedString;
}

// Sends the current time to element in real time
setInterval(setTime, 1000);

// Opens the start menu
function showMenu(){
  start_menu = document.getElementById("start-menu");
  if (start_menu.style.visibility == "hidden"){
    start_menu.style.visibility = "visible";
    console.log("Show menu")
  } else {
    start_menu.style.visibility = "hidden";
    console.log("Hide menu")
  }
  console.log("Menu status updated")

}
