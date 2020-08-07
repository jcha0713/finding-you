"use strict";

const you = document.querySelector(".you");
const universe = document.querySelector(".universe");

let first = true;
let x = Math.floor(Math.random() * window.innerWidth);
let y = Math.floor(Math.random() * window.innerHeight);

you.style.width = "40px";
you.style.height = "40px";
you.style.borderRadius = "50%";
you.style.position = "fixed";
you.style.left = `${x}px`;
you.style.top = `${y}px`;

you.addEventListener("mouseover", function () {
  you.style.transform = "scale(8)";
  // if (first) {
  //   setTimeout(function () {
  //     window.alert("FOUND!");
  //   }, 2000);
  //   first = !first;
  // }
});

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  cnv.parent(universe);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  fill("rgba(255, 255, 255, 0.9)");
  ellipse(mouseX, mouseY, 2, 2);
}
