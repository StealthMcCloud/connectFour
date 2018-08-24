//push the results of the which disc color to the array
//check the logic to see the 4 in a row matches

const columnOne = document.getElementById("column1")
const columnTwo = document.getElementById("column2")
const columnThree = document.getElementById("column3")
const columnFour = document.getElementById("column4")
const columnFive = document.getElementById("column5")
const columnSix = document.getElementById("column6")
const columnSeven = document.getElementById("column7")

// const allColumns = document.getElementsByClassName("column")
// console.log(allColumns);

let gameBoard = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];
//Data-Sets!
//Current Length
// function()


const columns =  [columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix, columnSeven];
let clickNum = 0;


columns.forEach(function playingBoard(column){
column.addEventListener("click", discDropper)
})

function discDropper(event) {
    const column = event.currentTarget;
    
    if (column.childElementCount === 6) {
        return;
    }
    rowIndex = column.childElementCount;
    columnIndex = column.dataset.columnNum;
    
    if (clickNum % 2) {
        
        let redDisc = document.createElement("div");
        redDisc.classList.add("redPiece");
        column.appendChild(redDisc);
        console.log(gameBoard[columnIndex][rowIndex] = "red");
        
    } else {
        let blackDisc = document.createElement("div");
        blackDisc.classList.add("blackPiece");
        column.appendChild(blackDisc);
        console.log(gameBoard[columnIndex][rowIndex] = "black");
    }
    clickNum++
    winChecker();
}

function winChecker() {
    if (
           matchFourInARow(horizontal)
        || matchFourInARow(vertical)
        // || matchFourInARow(diagonalUpRight)
        // || matchDiagonalUpLeft(DiagonalUpLeft)
    ) {
        console.log("Winner")
    }
}

function matchFourInARow(searchFunction) {
    for (let columnIndex = 0; columnIndex < gameBoard.length - 3; columnIndex++) {
        for (let rowIndex = 0; rowIndex < gameBoard[columnIndex].length - 3; rowIndex++) {
            let cell = gameBoard[columnIndex][rowIndex];
            if (cell !== 0) {
                const matched = searchFunction(cell, columnIndex, rowIndex);
                if (matched) return true;
            }
        }
    }
    return false;
}

function horizontal(cell, columnIndex, rowIndex) {
    if (cell === gameBoard[columnIndex + 1][rowIndex] && cell === gameBoard[columnIndex + 2][rowIndex] && cell === gameBoard[columnIndex +3][rowIndex]) {
    console.log("yay")
    return true;
}

return false;

}
function vertical(cell, columnIndex, rowIndex) {
    if (cell === gameBoard[columnIndex][rowIndex + 1] && cell === gameBoard[columnIndex][rowIndex + 2] && cell === gameBoard[columnIndex][rowIndex + 3]) {
    console.log("yay")
    return true;
}

return false;

}