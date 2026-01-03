let Startbtn = document.getElementById("Startbtn");
let Stopbtn = document.getElementById("Stopbtn");
let Resetbtn = document.getElementById("Resetbtn");

let outputsec = document.getElementById("sec");
let outputtens = document.getElementById("tens");

let sec = 0;
let tens = 0;

let myInterval = 0;

let colors = ["red", "blue", "green", "yellow"];
let num = 0;

function changeBackground() {
  document.body.style.backgroundColor = colors[num];
  num++;

  if (num === colors.length) {
    num = 0;
  }
}

function start() {

  tens = tens + 1;

  if (tens <= 9) {
    outputtens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    outputtens.innerHTML = tens;
  }

  if (tens > 99) {
    tens = 0;
    sec = sec + 1;
    outputtens.innerHTML = "00";

    if (sec <= 9) {
      outputsec.innerHTML = "0" + sec;
    } else {
      outputsec.innerHTML = sec;
    }
  }
}


Startbtn.addEventListener("click", function () {
  if (myInterval !== 0) return;

  myInterval = setInterval(function () {
    start();
    changeBackground();
  }, 1000);
});


Stopbtn.addEventListener("click", function () {
  clearInterval(myInterval);
  myInterval = 0;
});


Resetbtn.addEventListener("click", function () {
  clearInterval(myInterval);
  myInterval = 0;

  sec = 0;
  tens = 0;

  outputsec.innerHTML = "00";
  outputtens.innerHTML = "00";
 
});
