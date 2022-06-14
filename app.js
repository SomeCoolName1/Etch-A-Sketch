// for (i = 0; i < size * size; i++) {
//   const gridContainer = document.getElementbyId("#gridContainer");
//   const gridDiv = document.createElement("div");
//   gridDiv.classList.add("grid");
//   gridDiv.textContent = "test";
//   gridContainer.appendChild(gridDiv);
// }
function setupGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (i = 0; i < size; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid");
    gridDiv.addEventListener("mouseover", changeGridColor);
    gridContainer.appendChild(gridDiv);
  }
}

function changeGridColor(e) {
  e.target.style.backgroundColor = "#fefefe";
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
