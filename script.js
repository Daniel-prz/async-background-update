"use strict";

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
const body = document.querySelector("body");
async function changeBodyColor() {
  await delay(5000);
  changeColor("black");
  await delay(5000);
  changeColor("red");
  await delay(5000);
  changeColor("grey");
}
function changeColor(color) {
  body.style.backgroundColor = color;
}

changeBodyColor();
