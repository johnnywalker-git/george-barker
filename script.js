let menuToggle = document.getElementById("menu-button")
let menuBar = document.getElementById("menu-bar")


menuToggle.addEventListener("click", openMenu)
menuToggle.addEventListener("touchstart", openMenu);



function openMenu() {
    if(menuBar.style.display === "none") {
      menuBar.style.display = "flex";
      setTimeout(() => {
        menuBar.classList.add("open");
      }, 50); // delay to allow display to change before animation starts
    } else {
      menuBar.classList.remove("open");
      setTimeout(() => {
        menuBar.style.display = "none";
      }, 500); // duration of the animation
    }
  }