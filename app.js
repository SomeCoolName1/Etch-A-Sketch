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

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

function updateSliderValue(e) {
  output.innerHTML = e.target.value;
  setupGrid(e.target.value);
  console.log("size value: " + e.target.value);
}

window.onload = () => {
  setupGrid(16);
};

var currentColor = "#fefefe";

function changeColor(e) {
  console.log("Color hex: " + e.target.value);
  currentColor = e.target.value;
  // e.target.style.backgroundColor = currentColor;
}

// function setCurrentColor(newColor) {
//   currentColor = newColor;
// }

function changeColor1(e) {
  e.target.style.backgroundColor = currentColor;
}
