const container = document.querySelector('#container');

let row1 = createDiv();
let row2 = createDiv();
let row3 = createDiv();
let row4 = createDiv();
let row5 = createDiv();
let row6 = createDiv();
let row7 = createDiv();
let row8 = createDiv();
let row9 = createDiv();
let row10 = createDiv();
let row11 = createDiv();
let row12 = createDiv();
let row13 = createDiv();
let row14 = createDiv();
let row15 = createDiv();
let row16 = createDiv();

const rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, row14, row15, row16];

for(var i = 0; i < rows.length; i++){
    rows[i].classList.add('row');
    container.append(rows[i])
}


for(var i = 0; i < rows.length; i++){
    addColumn(rows[i]);
}



function addColumn(targetRow){
    for(var j = 0; j < 16 ; j++){
    var column = document.createElement('div');
    column.classList.add('divBox');
    column.addEventListener("mouseover", () => tryFunction(element));
    targetRow.appendChild(column);
    }
}

function createDiv(){
    return document.createElement('div');
}

function tryFunction(hello){
    hello.setAttribute('style', 'background: black; color: black');
}