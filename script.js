const columnOne = document.getElementById("column1")
const columnTwo = document.getElementById("column2")
const columnThree = document.getElementById("column3")
const columnFour = document.getElementById("column4")
const columnFive = document.getElementById("column5")
const columnSix = document.getElementById("column6")
const columnSeven = document.getElementById("column7")

const columns = [columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix,columnSeven];
let clickNum = 0;

columns.forEach(function (column){
column.addEventListener("click", discDropper)
})


function discDropper(event) {
    const column = event.currentTarget;

    if (column.childElementCount === 6) {
        return;
    }

    if (clickNum % 2) {

    let redDisc = document.createElement("div");
    redDisc.classList.add("redPiece");
    column.appendChild(redDisc);
    } else {
        let blackDisc = document.createElement("div");
        blackDisc.classList.add("blackPiece");
        column.appendChild(blackDisc);
    }
    clickNum++
}

function refreshButton() {};

function winPicker() {};