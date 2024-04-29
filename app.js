const gridContainer = document.getElementById('container');

function makeGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    for(i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        //cell.innerText = (i + 1);
        gridContainer.appendChild(cell).className = 'grid-item';
    }
}

makeGrid(16, 16);