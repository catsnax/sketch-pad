wholeFunction();

myButton = document.querySelector('#button');
myButton.addEventListener("click", () => wholeFunction());


function wholeFunction(){
const container = document.querySelector('#container');

myButton = document.querySelector('#button');
myButton.addEventListener("click", () => deleteRows());

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
    var column1 = createDiv();
    var column2 = createDiv();
    var column3 = createDiv();
    var column4 = createDiv();
    var column5 = createDiv();
    var column6 = createDiv();
    var column7 = createDiv();
    var column8 = createDiv();
    var column9 = createDiv();
    var column10 = createDiv();
    var column11 = createDiv();
    var column12 = createDiv();
    var column13 = createDiv();
    var column14 = createDiv();
    var column15 = createDiv();
    var column16 = createDiv();
    let columns = [column1, column2, column3, column4, column5, column6, column7, column8, column9, column10, column11, column12, column13, column14, column15, column16];
    
    for(var i = 0; i < columns.length; i++){
        assignProperties(columns[i])
        targetRow.appendChild(columns[i])
    }
}


function assignProperties(column){
    column.classList.add('divBox');
    column.addEventListener("mouseover", () => tryFunction(column));
}

function createDiv(){
    return document.createElement('div');
}

function tryFunction(hello){
    hello.setAttribute('style', 'background: black; color: black');
}
function deleteRows(){
    for(var i = 0; i < rows.length; i++){
        rows[i].remove()
    }
}
}