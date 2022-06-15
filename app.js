function setupGrid(size) {
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (i = 0; i < size * size; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    gridDiv.addEventListener("mouseover", changeColor1);
    gridContainer.appendChild(gridDiv);
  }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  return;
};

window.onload = () => {
  setupGrid(16);
};

var currentColor = "#fefefe";

function changeColor(e) {
  console.log("Color hex: " + e.target.value);
  currentColor = e.target.value;
}

// function setCurrentColor(newColor) {
//   currentColor = newColor;
// }

function changeColor1(e) {
  e.target.style.backgroundColor = currentColor;
}
