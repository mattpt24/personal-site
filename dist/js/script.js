"use strict";

var openMenuBtn = document.querySelector(".open-menu-btn");
var closeMenuBtn = document.querySelector(".close-menu-btn");
var menuContainer = document.querySelector(".dropdown-menu__container");
var menuNavList = document.querySelector(".nav-list");
var menuSocials = document.querySelector(".dropdown-menu__socials");
var menuBackInTime = document.querySelector(".back-in-time--toggle");
var menuImageOverlay = document.querySelector(".image-overlay");
var menuNavLinks = document.querySelectorAll(".page-link");
var entranceAnimationBlock1 = document.querySelector(".block-1");
var entranceAnimationBlock2 = document.querySelector(".block-2");
openMenuBtn.addEventListener("click", function () {
  menuContainer.classList.add("dropdown-menu--toggled");
  setTimeout(function () {
    menuNavList.style.display = "flex";
    menuImageOverlay.classList.add('image-overlay--toggled');
  }, 800);
  setTimeout(function () {
    menuSocials.classList.add("dropdown-menu__socials-toggled");
  }, 1600);
  setTimeout(function () {
    menuBackInTime.classList.add("back-in-time--toggled");
  }, 1800);
});
closeMenuBtn.addEventListener("click", function () {
  menuImageOverlay.classList.remove('image-overlay--toggled');
  setTimeout(function () {
    menuContainer.classList.remove("dropdown-menu--toggled");
    menuNavList.style.display = "none";
    menuSocials.classList.remove("dropdown-menu__socials-toggled");
    menuBackInTime.classList.remove("back-in-time--toggled");
  }, 800);
});
menuNavLinks.forEach(function (y) {
  y.addEventListener("click", function (event) {
    event.preventDefault();
    entranceAnimationBlock1.classList.add("entrance-blocks-reversed");
    entranceAnimationBlock2.classList.add("entrance-blocks-reversed");
    setTimeout(function () {
      window.location.href = event.target.href;
    }, 1000);
  });
});
console.log(menuNavLinks);
"use strict";

var darkModeToggleBtn = document.querySelector(".dark-mode-btn");
var darkModeTitles = document.querySelectorAll(".dark-mode-title");
var darkModeText = document.querySelectorAll(".dark-mode-text");
var darkModeIcons = document.querySelectorAll(".dark-mode-icon");
var darkModeIconContainers = document.querySelectorAll(".icon-container");
var dropdownMenu = document.querySelector(".dropdown-menu__container");
var backInTimeBtn = document.querySelector(".back-in-time--toggle");
var imageOverlay = document.querySelector(".image-overlay");
var navbarLogo = document.querySelector(".navbar__logo");
var isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// if (isDarkMode) {
//     applyDarkMode();
// }

darkModeToggleBtn.addEventListener("click", function () {
  isDarkMode = !isDarkMode;
  localStorage.setItem('isDarkMode', isDarkMode);
  applyDarkMode();
});
function applyDarkMode() {
  darkModeTitles.forEach(function (x) {
    x.classList.toggle("dark-mode--titles-toggle");
  });
  darkModeIcons.forEach(function (x) {
    x.classList.toggle("dark-mode--icons-toggle");
  });
  darkModeIconContainers.forEach(function (x) {
    x.classList.toggle("dark-mode--icon-container-toggle");
  });
  darkModeText.forEach(function (x) {
    x.classList.toggle("dark-mode--text-toggle");
  });
  darkModeToggleBtn.classList.toggle("dark-mode--btn-toggle");
  imageOverlay.classList.toggle("dark-mode--background-toggle");
  document.body.classList.toggle("dark-mode--background-toggle");
  dropdownMenu.classList.toggle("dark-mode--menu-toggle");
  backInTimeBtn.classList.toggle("dark-mode--back-in-time-btn-toggle");
  navbarLogo.classList.toggle("dark-mode--titles-toggle");
}
"use strict";

var backInTimeContainer = document.querySelector(".back-in-time");
var backInTimeVideo = document.querySelector("video");
var openBackInTimeBtn = document.querySelector(".back-in-time--toggle");
var closeBackInTimeBtn = document.querySelector(".back-in-time--toggle-close");
if (openBackInTimeBtn) {
  openBackInTimeBtn.addEventListener("click", function () {
    backInTimeVideo.currentTime = 0;
    backInTimeContainer.classList.add("back-in-time--activated");
    backInTimeVideo.play();
  });
}
if (closeBackInTimeBtn) {
  closeBackInTimeBtn.addEventListener("click", function () {
    backInTimeContainer.classList.remove("back-in-time--activated");
    backInTimeVideo.pause();
  });
}
var openProjectsBtn = Array.from(document.querySelectorAll(".view-project-btn"));
var closeProjectsBtn = Array.from(document.querySelectorAll(".close-project-btn"));
var projectOverlay = Array.from(document.querySelectorAll(".portfolio-project-modal__wrapper"));
var projectContainer = Array.from(document.querySelectorAll(".portfolio-project-modal"));
if (openProjectsBtn) {
  var _loop = function _loop(i) {
    openProjectsBtn[i].addEventListener("click", function () {
      projectOverlay[i].classList.add("portfolio-modal-overlay--activated");
      setTimeout(function () {
        projectContainer[i].classList.add("portfolio-modal--activated");
      }, 500);
    });
  };
  for (var i = 0; i < openProjectsBtn.length; i++) {
    _loop(i);
  }
}
if (closeProjectsBtn) {
  var _loop2 = function _loop2(y) {
    closeProjectsBtn[y].addEventListener("click", function (event) {
      projectContainer[y].classList.remove("portfolio-modal--activated");
      setTimeout(function () {
        projectOverlay[y].classList.remove("portfolio-modal-overlay--activated");
      }, 500);
      event.stopPropagation(); // Prevent event bubbling (if applicable)
    });
  };
  for (var y = 0; y < closeProjectsBtn.length; y++) {
    _loop2(y);
  }
}
var myText = document.querySelector(".email");
var button = document.querySelector(".copy-to-clipboard");
if (myText) {
  button.addEventListener("click", function () {
    myText.select();
    document.execCommand("copy");
    button.innerText = "Copied!";
    button.classList.add("copied-text");
  });
}