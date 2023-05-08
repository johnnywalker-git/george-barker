let menuToggle = document.getElementById("menu-button")
let menuBar = document.getElementById("menu-bar")


menuToggle.addEventListener("click", openMenu)


function openMenu() {
  if(menuBar.style.display === "none") {
    menuBar.style.display = "flex";
  } else {
    menuBar.style.display = "none";
    console.log("Just been clicked again");
  }  
    }