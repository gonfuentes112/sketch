let dimensions = 16;
const sketchpad = document.getElementById('sketchpad');
const sketchpadSize = sketchpad.clientWidth;
const setDimensionsButton = document.getElementById('setdimensions');
const resetButton = document.getElementById('reset');
const colorButton = document.getElementById('pencolor');
const colorStyles = ['blackCell', 'random'];
let currentStyleIndex = 0;

function isDimensionInvalid(dimension) {
    return isNaN(dimension) || 
    dimension > 100 ||
    dimension < 1;
};

setDimensionsButton.addEventListener('click', () => {
    let newDimensions;
    do {
        newDimensions = window.prompt('Enter the desired dimensions (1-100)');
    } while(isDimensionInvalid(newDimensions));
    dimensions = newDimensions
    generateSketchpad(dimensions);
    }
);

resetButton.addEventListener('click', () => {
    generateSketchpad(dimensions);
    }
)

colorButton.addEventListener('click', () => {
        currentStyleIndex = (currentStyleIndex + 1) % colorStyles.length;
    }

); 

function randomHex() {
    return Math.floor(Math.random() * 256);
}

function randomRGB() {
    let red = randomHex(), green = randomHex(), blue = randomHex();
    return `rgb(${red},${green}, ${blue})`

};

function colorize(event) {
    const cell = event.target;
    if (!(cell.classList.contains('cell'))) {
        return;
    }
    const currentStyle = colorStyles[currentStyleIndex];
    let cellStyle = cell.getAttribute('data-style');
    if (cellStyle !== currentStyle) {
        cell.classList.toggle(cellStyle);
        cell.classList.toggle(currentStyle);
        cell.setAttribute('data-style', currentStyle);
        cellStyle = currentStyle;
    }
    if (cellStyle === 'random') {
        cell.style.backgroundColor = randomRGB();
    }
    const currentOpacity = cell.style.opacity;
    if (currentOpacity > 0) {
        cell.style.opacity = currentOpacity - 0.1;
    }

};

sketchpad.addEventListener('mouseover', (event) =>{
    colorize(event);

    }
);


function generateSketchpad(dimensions) {
    sketchpad.innerHTML = '';
    const currentStyle = colorStyles[currentStyleIndex];
    let cellsize = sketchpadSize / dimensions;
    for (let i = 0; i < dimensions; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.style = `height: ${cellsize}px`;
        for (let j = 0; j < dimensions; j++) {
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.style.height = `${cellsize}px`
            newCell.style.width = '100%';
            newCell.style.opacity = 1;
            newRow.appendChild(newCell);
            newCell.setAttribute('data-style', currentStyle);
            newCell.classList.toggle(currentStyle);
        }
        sketchpad.appendChild(newRow);
    }
}
generateSketchpad(dimensions);