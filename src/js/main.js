//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navmenu");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbarfixed");
    hamburger.classList.add("hamburgerwhite");
    navMenu.classList.add("navbarfixed");
  } else {
    header.classList.remove("navbarfixed");
    hamburger.classList.remove("hamburgerwhite");
    navMenu.classList.remove("navbarfixed");
  }
};
//navbar fixed end

//hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navmenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburgeractive");
  navMenu.classList.toggle("hidden");
});
//hamburger end

//typed
import Typed from "typed.js";

const typed = new Typed("#element", {
  strings: ["Devscale Student", "Long Life Learner", "Fullstack Engineer"],
  typeSpeed: 50,
  backDelay: 2000,
  loop: true,
});

// confetti
import confetti from "canvas-confetti";

const confettiBtn = document.getElementById("confetti");
const myCanvass = document.createElement("canvas");
myCanvass.style.width = "100vw";
myCanvass.style.height = "100vh";
myCanvass.style.position = "fixed";
myCanvass.style.inset = 0;
myCanvass.style.zIndex = -10;
document.body.append(myCanvass);

confettiBtn.addEventListener("click", () => {
  confettiBtn.addEventListener("click", () => {
    // Assuming there is a form with the ID "myForm"
    const myForm = document.getElementById("myForm");
  
    // Check if the form is valid before displaying confetti
    if (myForm.checkValidity()) {
      const myConfetti = confetti.create(myCanvass, {
        resize: true,
        useWorker: true,
      });
  
      myConfetti({
        particleCount: 100,
        spread: 160,
      });
    } else {
      // Form is not valid, you can add any error handling here
      alert("Please fill in the form correctly.");
    }
  });
});
