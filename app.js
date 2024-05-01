const h1 = document.createElement('h1');
h1.innerText = 'Etch-A-Sketch';
h1.setAttribute('id', 'sub-heading');
h1.setAttribute('class', 'secondary');
document.body.appendChild(h1);

//contains the grid
const gridContainer = document.createElement('div');
gridContainer.innerText = '';
gridContainer.setAttribute('id', 'container');
document.body.appendChild(gridContainer);

let rows = 0;
let cols = 0;

//function to make the grid.
function makeGrid(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);

  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement('div');
    gridContainer.appendChild(cell).className = 'grid-item';
  }

  const gridElement = document.querySelectorAll('.grid-item');
  gridElement.forEach((gridElement) => {
    gridElement.addEventListener('click', () => {
      gridElement.style.backgroundColor = 'white';
    });
  });
}
//initially sets grid when page is loaded
makeGrid(16, 16);

//adds a div element to add button options.
const buttonGroup = document.createElement('div');
buttonGroup.innerText = '';
buttonGroup.setAttribute('class', 'options');
document.body.appendChild(buttonGroup);

//creates a reset button to erase and set grid.
let reset = document.createElement('button');
reset.setAttribute('id', 'resetButton');
reset.innerText = 'Reset';
buttonGroup.appendChild(reset);

//add functionality to the reset button
const resetGrid = document.getElementById('resetButton');
resetGrid.addEventListener('click', () => {
  gridContainer.innerText = '';
  makeGrid(16, 16);
});
