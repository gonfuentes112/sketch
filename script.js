const sketchpad = document.getElementById('sketchpad');
let size = 16;


function generateSketchpad(size) {
    let cellsize = 320 / size;
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement('div');
        newRow.setAttribute('class', 'row');
        newRow.style = `height: ${cellsize}px`;
        for (let j = 0; j < size; j++) {
            const newCell = document.createElement('div');
            newCell.setAttribute('class', 'cell');
            newCell.style = `height: ${cellsize}px; width: 100%`;
            newRow.appendChild(newCell);
        }
        sketchpad.appendChild(newRow);
    }
}
generateSketchpad(size);