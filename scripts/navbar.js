const topNav = document.querySelector(".header-nav").offsetHeight;
var el = document.querySelector(".header-nav");
var movEl = el.offsetTop;

const nav_small_button = document.querySelector(".header-small-button");
const nav_small_button_height = document.querySelector(
  ".header-small-button"
).offsetHeight;
var el_small = document.querySelector(".header-small-button");
var movEl_small = el_small.offsetTop;

const nav_small = document.querySelector(".header-nav-small");

const logo = el.querySelector(".logo-container");
const searchWrapper = el.querySelector(".search-wrapper");

// THIS CODE PART UNDER IS COPIED FROM STACK OVERFLOW //

if (window.innerWidth > 1024) {
  window.onscroll = function () {
    navbarscroll();
  };
} else {
  if (!nav_small_button.classList.contains("open")) {
    window.onscroll = function () {
      navbarscroll_on_small();
    };
  }
}

function navbarscroll() {
  const nav = movEl - document.documentElement.scrollTop - topNav;

  if (nav <= -90) {
    el.setAttribute(
      "style",
      "position: fixed; top: 0; backdrop-filter: blur(7px)"
    );

    el.classList.add("justify-content-space-between");

    logo.classList.add("display-block");

    searchWrapper.classList.add("display-block");
  } else {
    el.removeAttribute(
      "style",
      "position: absolute; bottom: 0; backdrop-filter: blur(7px)"
    );

    el.classList.remove("justify-content-space-between");

    logo.classList.remove("display-block");

    searchWrapper.classList.remove("display-block");
  }
}

function navbarscroll_on_small() {
  const nav =
    movEl_small - document.documentElement.scrollTop - nav_small_button_height;
  if (nav <= innerHeight * -1) {
    el_small.setAttribute("style", "display: block;");
  } else {
    el_small.removeAttribute("style", "display: block;");
  }
}

// THIS CODE PART ABOVE IS COPIED FROM STACK OVERFLOW //

function openSmall() {
  nav_small_button.classList.add("open");
  nav_small_button.setAttribute("style", "display: none;");
  nav_small.setAttribute("style", "display: flex");
}

function exitSmall() {
  nav_small_button.classList.remove("open");
  nav_small_button.setAttribute("style", "display: block;");
  nav_small.setAttribute("style", "display: none");
}
