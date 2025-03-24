const contain = document.querySelector(".container");

let currentsize = 16;
let colorChanged = false;
let gridCreated = false;
let brushSelected = false;
let eraserSe;ected = false;

// for size
const sizeInput = document.querySelector(".size-input");
const sizeBtn = document.querySelector(".size-btn");

sizeBtn.addEventListener("click", sizeChange);

function sizeChange(){
    
    const sizes = sizeInput.value;
    currentsize = sizes;
    createGrid(currentsize, colorChanged);
}

// for color
const colorInput = document.querySelector(".color-input");
const colorBtn = document.querySelector(".color-btn");

colorBtn.addEventListener("click", changeColor);

function changeColor(){
    colorChanged = true;
    createGrid(currentsize, colorChanged)
}


// clear button
const clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", clearTheBoard);

function clearTheBoard(){
    createGrid(currentsize, colorChanged);
}





// Creates cubes in the container
function createGrid(size, color){
    contain.innerHTML = "";
    for (let i = 0; i < size; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('rows');

        for (let j = 0; j < size; j++){
            const cubes = document.createElement('div');
            cubes.classList.add('cubes');
            cubes.style.width = `${500/size}px`;
            cubes.style.aspectRatio = 1/1;

            cubes.addEventListener("mouseover", (e) =>{
                if (color){
                     e.target.style.backgroundColor = colorInput.value;
                }else{
                    e.target.style.backgroundColor = randomColor();
                }
                
                
            }
            );
            
            gridRow.appendChild(cubes);

        }
        contain.appendChild(gridRow);
        gridCreated = true;
    }
}


// eraser btn
const eraserBtn = document.querySelector(".eraser-btn");

eraserBtn.addEventListener("click", startEraserMode);

function startEraserMode(){
    eraserSelected = true;
    if (eraserSelected){
        brushBtn.style.backgroundColor = '#eeeded';
        eraserBtn.style.backgroundColor = '#baf5c0';
    }
    if (gridCreated){
        const selectedcubes = document.querySelectorAll('.cubes');

        selectedcubes.forEach(cube => {
            cube.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = '#fff';
            })
        })
        
    }
    
}


// brush btn
const brushBtn = document.querySelector(".brush-btn");

brushBtn.addEventListener("click", startBrushMode);
function startBrushMode(){
    brushSelected = true;
    if (brushSelected){
        brushBtn.style.backgroundColor = '#baf5c0';
        eraserBtn.style.backgroundColor = '#eeeded';
    }
    
    if (gridCreated){
        const selectedcubes = document.querySelectorAll('.cubes');

        selectedcubes.forEach(cube => {
            cube.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = randomColor();
            })
        })
        
    }
    
}

// generate random color
function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbs = `rgb(${r}, ${g}, ${b})`;
    return rgbs;
}

// KEYBOARD SHORTCUTS
document.body.addEventListener("keydown", function(e){
    if(e.key == 'e') {startEraserMode()};
    if(e.key == 'b') {startBrushMode()};
    if(e.key == 'c') {clearTheBoard()};

})

createGrid(currentsize, colorChanged);
