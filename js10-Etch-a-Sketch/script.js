const contain = document.querySelector(".container");

let currentsize = 32;

function createGrid(size){
    for (let i = 0; i < size; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('rows');

        for (let j = 0; j < size; j++){
            const cubes = document.createElement('div');
            cubes.classList.add('cubes');
            cubes.style.width = `${500/size}px`;
            cubes.style.aspectRatio = 1/1;

            cubes.addEventListener("mouseover", (e) =>{
                e.target.style.backgroundColor = randomColor();
            }
            );
            
            gridRow.appendChild(cubes);

        }
        contain.appendChild(gridRow);
    }
}

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbs = `rgb(${r}, ${g}, ${b})`;
    return rgbs;
}

createGrid(currentsize);