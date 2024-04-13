

const darkModeToggleBtn = document.querySelector(".dark-mode-btn");
const darkModeTitles = document.querySelectorAll(".dark-mode-title");
const darkModeText = document.querySelectorAll(".dark-mode-text");
const darkModeIcons = document.querySelectorAll(".dark-mode-icon");
const darkModeIconContainers = document.querySelectorAll(".icon-container");
const dropdownMenu = document.querySelector(".dropdown-menu__container");
const backInTimeBtn = document.querySelector(".back-in-time--toggle");
const imageOverlay = document.querySelector(".image-overlay");
const navbarLogo = document.querySelector(".navbar__logo");

let isDarkMode = localStorage.getItem('isDarkMode') === 'true';


// if (isDarkMode) {
//     applyDarkMode();
// }

darkModeToggleBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode);
    applyDarkMode();
  });
  




  function applyDarkMode() {
    darkModeTitles.forEach(x => {
        x.classList.toggle("dark-mode--titles-toggle");
    });
    darkModeIcons.forEach(x => {
        x.classList.toggle("dark-mode--icons-toggle");
    });
    darkModeIconContainers.forEach(x => {
        x.classList.toggle("dark-mode--icon-container-toggle");
    });
    darkModeText.forEach(x => {
        x.classList.toggle("dark-mode--text-toggle");
    });
    darkModeToggleBtn.classList.toggle("dark-mode--btn-toggle");
    imageOverlay.classList.toggle("dark-mode--background-toggle");
    document.body.classList.toggle("dark-mode--background-toggle");
    dropdownMenu.classList.toggle("dark-mode--menu-toggle");
    backInTimeBtn.classList.toggle("dark-mode--back-in-time-btn-toggle");
    navbarLogo.classList.toggle("dark-mode--titles-toggle");
  }





