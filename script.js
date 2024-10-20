let dimensions = 16;
const sketchpad = document.getElementById('sketchpad');
const sketchpadSize = sketchpad.clientWidth;
const setDimensionsButton = document.getElementById('setdimensions');
const resetButton = document.getElementById('reset');

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

function colorize(event) {
    const cell = event.target;
    cell.classList.add('blackCell');
};

sketchpad.addEventListener('mouseover', (event) =>{
    colorize(event);
    }
);


function generateSketchpad(dimensions) {
    sketchpad.innerHTML = '';
    let cellsize = sketchpadSize / dimensions;
    for (let i = 0; i < dimensions; i++) {
        const newRow = document.createElement('div');
        newRow.setAttribute('class', 'row');
        newRow.style = `height: ${cellsize}px`;
        for (let j = 0; j < dimensions; j++) {
            const newCell = document.createElement('div');
            newCell.setAttribute('class', 'cell');
            newCell.style = `height: ${cellsize}px; width: 100%`;
            newRow.appendChild(newCell);
        }
        sketchpad.appendChild(newRow);
    }
}
generateSketchpad(dimensions);