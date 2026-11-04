const container = document.querySelector('.container');
const sizeBtn = document.querySelector('.size-btn');
const clearBtn = document.querySelector('.clear-btn');

let currentRows = 20;
let currentCols = 20;

function createGrid(rows, cols) {
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    const totalSquares = rows * cols;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

sizeBtn.addEventListener('click', () => {
    let rowsInput = prompt('Enter number of rows (1 to 100):', currentRows);
    if (rowsInput === null) return;

    let colsInput = prompt('Enter number of columns (1 to 100):', currentCols);
    if (colsInput === null) return;

    const rows = parseInt(rowsInput);
    const cols = parseInt(colsInput);

    if (rows > 0 && rows <= 100 && cols > 0 && cols <= 100) {
        currentRows = rows;
        currentCols = cols;
        createGrid(currentRows, currentCols);
    } else {
        alert('Invalid input! Both rows and columns must be numbers between 1 and 100.');
    }
});

clearBtn.addEventListener('click', () => {
    createGrid(currentRows, currentCols);
});

createGrid(currentRows, currentCols);