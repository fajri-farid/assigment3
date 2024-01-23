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
