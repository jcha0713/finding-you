"use strict";

const universe = document.querySelector(".universe");
const universeImg = document.querySelector(".universe-img");

let cnv;
let first = true;
let x = Math.floor(Math.random() * window.innerWidth);
let y = Math.floor(Math.random() * window.innerHeight);
let r = Math.floor(Math.random() * 120);
let g = Math.floor(Math.random() * 70);
let b = Math.floor(Math.random() * 70);

setTimeout(function () {
  universeImg.style.opacity = "1";
}, 3000);

function found() {
  const star = document.querySelector(".you");
  star.style.transform = "scale(8)";
  if (first) {
    setTimeout(function () {
      window.alert("空");
    }, 2000);
    first = !first;
  }
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  let you = createImg("star.png", "star");
  you.addClass("you");
  you.position(x, y);
  you.style("width", "40px");
  you.style("height", "40px");
  you.style("border-radius", "50%");
  you.style("position", "fixed");
  you.style("left", `${x}px`);
  you.style("top", `${y}px`);
  setTimeout(function () {
    you.style("transition", "6s ease-out");
    you.style("opacity", "1");
  }, 3000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  fill(`rgba(${r}, ${g}, ${b}, 0.9)`);
  ellipse(mouseX, mouseY, 10, 10);
  if (
    x + 10 <= mouseX &&
    x + 30 >= mouseX &&
    y + 10 <= mouseY &&
    y + 30 >= mouseY
  ) {
    found();
  }
}

document.addEventListener(
  "touchmove",
  function (event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  },
  false
);
