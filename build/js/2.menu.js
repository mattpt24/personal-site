
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menuContainer = document.querySelector(".dropdown-menu__container");
const menuNavList = document.querySelector(".nav-list");
const menuSocials = document.querySelector(".dropdown-menu__socials");
const menuBackInTime = document.querySelector(".back-in-time--toggle");
const menuImageOverlay = document.querySelector(".image-overlay");
const menuNavLinks = document.querySelectorAll(".page-link");
const entranceAnimationBlock1 = document.querySelector(".block-1");
const entranceAnimationBlock2 = document.querySelector(".block-2");



openMenuBtn.addEventListener("click", () => {
    menuContainer.classList.add("dropdown-menu--toggled");
    setTimeout(() => {
        menuNavList.style.display = "flex";
        menuImageOverlay.classList.add('image-overlay--toggled');
    }, 800);
    setTimeout(() => {
        menuSocials.classList.add("dropdown-menu__socials-toggled");
    }, 1600);
    setTimeout(() => {
        menuBackInTime.classList.add("back-in-time--toggled");
    }, 1800);
});


closeMenuBtn.addEventListener("click", () => {
    menuImageOverlay.classList.remove('image-overlay--toggled');
    setTimeout(() => {
        menuContainer.classList.remove("dropdown-menu--toggled");
        menuNavList.style.display = "none";
        menuSocials.classList.remove("dropdown-menu__socials-toggled");
        menuBackInTime.classList.remove("back-in-time--toggled");
    }, 800);
});





menuNavLinks.forEach(y => {
    y.addEventListener("click", (event) => {
        event.preventDefault(); 
        entranceAnimationBlock1.classList.add("entrance-blocks-reversed");
        entranceAnimationBlock2.classList.add("entrance-blocks-reversed");
        setTimeout(function() {
            window.location.href = event.target.href;
          }, 1000);
    })
})


console.log(menuNavLinks);