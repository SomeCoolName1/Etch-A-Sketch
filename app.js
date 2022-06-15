window.onload = () => {
  setupGrid(16);
};

var currentColor = "#000000"; //Match initial colour wheel being black
var currentMode = "colorMode";

//Set up grid

function setupGrid(size) {
  gridBoxes.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  gridBoxes.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (i = 0; i < size * size; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    gridDiv.addEventListener("mouseover", changeColor1);

    gridBoxes.appendChild(gridDiv);
  }
}

//Slider

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
var size = slider.value;
output.innerHTML = slider.value;
output2.innerHTML = slider.value;

//Changing sldier value passes e.target.value as the size in setupgrid()
//new grid (from reset button) is also triggered but maintains size

function updateSliderValue(e) {
  output.innerHTML = e.target.value;
  output2.innerHTML = e.target.value;
  size = e.target.value;
  setupGrid(e.target.value);
  console.log("size value: " + e.target.value);
  newGrid();
}

//On reset button click

function newGrid() {
  const gridBoxes = document.getElementById("gridBoxes");
  gridBoxes.innerHTML = "";
  console.log(size);
  setupGrid(size);
}

//Grabs changeColor(e) on click event from color wheel to update current color
//currentColor, global variable, is then put into colorChange1 if on colorMode

function changeColor(e) {
  console.log("Color hex: " + e.target.value);
  currentColor = e.target.value;
}

//current mode changes the colouring tool

function changeColor1(e) {
  if (currentMode == "eraserMode") {
    e.target.style.backgroundColor = "#fefefe";
  } else if (currentMode == "rainbowMode") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (currentMode == "colorMode") {
    e.target.style.backgroundColor = currentColor;
  }
}

//onclicks from buttons pass strings as arguments to change currentMode
//onclicks update global variable

function mode(modeEvent) {
  console.log(modeEvent);
  if (modeEvent == "eraserMode") {
    currentMode = "eraserMode";
  } else if (modeEvent == "rainbowMode") {
    currentMode = "rainbowMode";
  } else if (modeEvent == "colorMode") {
    currentMode = "colorMode";
  }
}
