

const backInTimeContainer  = document.querySelector(".back-in-time");
const backInTimeVideo = document.querySelector("video");
const openBackInTimeBtn = document.querySelector(".back-in-time--toggle");
const closeBackInTimeBtn = document.querySelector(".back-in-time--toggle-close");
const previousSitesContent = document.querySelector(".back-in-time__content");

if(openBackInTimeBtn) {
openBackInTimeBtn.addEventListener("click", () => {
    backInTimeVideo.currentTime = 0;
    backInTimeContainer.classList.add("back-in-time--activated");
    backInTimeVideo.play();
    setTimeout(() => {
      previousSitesContent.classList.add("back-in-time--content-enter")
    }, 1000);
})
}

if(closeBackInTimeBtn) {
closeBackInTimeBtn.addEventListener("click", () => {
    backInTimeContainer.classList.remove("back-in-time--activated");
    backInTimeVideo.pause();

})
}



const openProjectsBtn = Array.from(document.querySelectorAll(".view-project-btn"));
const closeProjectsBtn = Array.from(document.querySelectorAll(".close-project-btn"));
const projectOverlay = Array.from(document.querySelectorAll(".portfolio-project-modal__wrapper"));
const projectContainer = Array.from(document.querySelectorAll(".portfolio-project-modal"));


if (openProjectsBtn) {
    for (let i = 0; i < openProjectsBtn.length; i++) {
      openProjectsBtn[i].addEventListener("click", () => {
        projectOverlay[i].classList.add("portfolio-modal-overlay--activated");
        setTimeout(() => {
          projectContainer[i].classList.add("portfolio-modal--activated");
        }, 500);
      });
    }
  }
  
  if (closeProjectsBtn) {
    for (let y = 0; y < closeProjectsBtn.length; y++) {
      closeProjectsBtn[y].addEventListener("click", (event) => {
        projectContainer[y].classList.remove("portfolio-modal--activated");
        setTimeout(() => {
            projectOverlay[y].classList.remove("portfolio-modal-overlay--activated");
          }, 500);
        event.stopPropagation(); // Prevent event bubbling (if applicable)
      });
    }
  }




const myText = document.querySelector(".email");
const button = document.querySelector(".copy-to-clipboard");


if(myText) {
button.addEventListener("click", function(){
    myText.select();
    document.execCommand("copy");
    button.innerText = "Copied!";
    button.classList.add("copied-text");
});
}









const circles = document.querySelectorAll(".circle");
const landing = document.querySelector("#landing");

if(landing) {
landing.addEventListener("mousemove", (event) => {

  let mouseX = event.pageX;
  let mouseY = event.pageY;



  circles.forEach(x => {
    const offset = x.dataset.offset;
    x.style.transform = `translate(${mouseX / offset}px, ${mouseY / offset}px)`;
  });


});
}





const gridStyleToggle = document.querySelector(".grid-style-toggle");
const portfolioProjects = document.querySelectorAll(".portfolio-project");

if(gridStyleToggle) {
gridStyleToggle.addEventListener("click", () => {
  gridStyleToggle.classList.toggle("grid-btn--toggled");
  portfolioProjects.forEach(x => {
    x.classList.toggle("no-grid-style--activated");
  })
});
}



const currentDate = document.querySelectorAll(".current-day");

currentDate.forEach(x => {

  let day;
  switch (new Date().getDay()) {
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case  6:
    day = "Saturday";
}


x.innerHTML = day;


})