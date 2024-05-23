// const colors = ["#543310", "#A1DD70", "#240750", "#F6FAB9", "#151515"];

// const items = document.getElementsByTagName("li");

// let numbers = [0, 1, 2, 3, 4];

// for (let i = 0; i < colors.length; i++) {
//   const randomNumber = numbers[Math.floor(Math.random() * colors.length)];
//   items[i].style.color = colors[randomNumber];
//   numbers = [...numbers.filter((num) => num != randomNumber)];
// }

// UYGA VAZIFA

// 1) KEYBOARD EVENTS

// const insert = document.getElementById("insert");

// window.addEventListener("keydown", (e) => {
//   insert.innerHTML = `
//   <div class="key">
//     ${e.key}
//     <small>event.key</small>
//   </div>
//   <div class="key">
//     ${e.which}
//     <small>event.keyCode</small>
//   </div>
//   <div class="key">
//     ${e.code}
//     <small>event.Code</small>
//   </div>
//   `;
// });

// BIRINCHI OZIM BAJARDIM CHALA JOYLARINI VIDEODAN TOGIRLADIM!

// 2) RANDOM COLOR GRADIENT

const body = document.querySelector("body");
const container = document.getElementsByClassName("container");
const colorText = document.getElementsByClassName("color__text");

const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getGradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length);
    color += values[randomNumber];
  }

  return color;
}

function setGradient() {
  const color1 = getGradient();
  const color2 = getGradient();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(
    ${randomDeg}deg,
    ${color1},
    ${color2}
  )`;
  body.style.background = bgColor;
  colorText.textContent = bgColor;
}

setGradient();
