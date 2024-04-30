const gridContainer = document.getElementById('container');

function makeGrid(rows, cols) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);

  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement('div');
    gridContainer.appendChild(cell).className = 'grid-item';
  }
}
makeGrid(16, 16);

const gridElement = document.querySelectorAll('.grid-item');
gridElement.forEach((gridElement) => {
  gridElement.addEventListener('click', () => {
    gridElement.style.backgroundColor = 'white';
  });
});
