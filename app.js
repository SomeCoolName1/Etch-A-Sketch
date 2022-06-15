function setupGrid(size) {
  gridBoxes.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  gridBoxes.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (i = 0; i < size * size; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    gridDiv.addEventListener("mouseover", changeColor1);
    gridDiv.addEventListener("mousedown", changeColor1);
    gridBoxes.appendChild(gridDiv);
  }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
var size = slider.value;
output.innerHTML = slider.value;
output2.innerHTML = slider.value;

function updateSliderValue(e) {
  output.innerHTML = e.target.value;
  output2.innerHTML = e.target.value;
  size = e.target.value;
  setupGrid(e.target.value);
  console.log("size value: " + e.target.value);
  newGrid();
}

window.onload = () => {
  setupGrid(16);
};

var currentColor = "#000000";

function changeColor(e) {
  console.log("Color hex: " + e.target.value);
  currentColor = e.target.value;
}

function newGrid() {
  const gridBoxes = document.getElementById("gridBoxes");
  gridBoxes.innerHTML = "";
  console.log(size);
  setupGrid(size);
}

var currentMode = "colorMode";

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
