var _ = require('underscore');

//#region Generation

export function GenerateSudoku(level){
    var baseGrid = [];
    for(let row = 0; row<9; row++){
        baseGrid[row] = [];
        for(let col = 0; col<9; col++){
            baseGrid[row][col] = (row*3 + Math.floor(row/3) + col) % 9 + 1;
        }
    }

    let funcArray = [
        Transpose(baseGrid),
        SwapRowsInsideArea(baseGrid),
        SwapColumnsInsideArea(baseGrid),
        SwapRowsAreas(baseGrid),
        SwapColumnsAreas(baseGrid)
    ];
    
    let mixingQuantity = _.random(10,30);
    for(let i=0; i < mixingQuantity; i++){
        let result = funcArray[_.random(funcArray.length-1)];
    }
    
    // clear some cells
    let filledQuantity = clearGrid(baseGrid, level);

    return GeneratePuzzle(baseGrid, filledQuantity);
}

function Transpose(grid){
    for (let i = 0; i < grid.length; i++) { 
        for (let j = 0; j < i; j++) { 
            let tmp = grid[i][j]; 
            grid[i][j] = grid[j][i]; 
            grid[j][i] = tmp; 
        } 
    } 
}

function SwapRowsInsideArea(grid){
    let area = _.random(2);
    let rows = _.sample(_.range(3*area,3*area+2),2);
    for (let i = 0; i < grid[rows[0]].length; i++){
        let tmp = grid[rows[0]][i];
        grid[rows[0]][i] = grid[rows[1]][i];
        grid[rows[1]][i] = tmp;
    }
}

function SwapColumnsInsideArea(grid){
    Transpose(grid);
    SwapRowsInsideArea(grid);
    Transpose(grid);
}

function SwapRowsAreas(grid){
    let rowsAreas = _.sample(_.range(3),2);
    
    for (let i=0; i<3; i++){
        for (let col = 0; col < grid[3*rowsAreas[0]+i].length; col++){
            let tmp = grid[3*rowsAreas[0]+i][col];
            grid[3*rowsAreas[0]+i][col] = grid[3*rowsAreas[1]+i][col];
            grid[3*rowsAreas[1]+i][col] = tmp;
        }
    }
}

function SwapColumnsAreas(grid){
    Transpose(grid);
    SwapRowsAreas(grid);
    Transpose(grid);
}

function clearGrid(grid, level){
    let cellsForHiding = _.sample(_.range(80), (81 - level - _.random(5)));
    cellsForHiding.forEach((item)=>{
        grid[Math.floor(item/9)][item%9] = 0;
    })
    return 81-cellsForHiding.length;
}

function GeneratePuzzle(grid, filledQuantity){
    let Puzzle = {
        filledQuantity: filledQuantity,
        spentTime: 0,
        isSolved: false,
        grid: []
    }

    for (let row = 0; row<9; row++){
        Puzzle.grid[row] = [];
        for (let col = 0; col<9; col++){
            Puzzle.grid[row][col] = {
                value: grid[row][col],
                hints: []
            }
        } 
    }
    return Puzzle;
}
//#endregion

export function CheckSudoku(puzzleTable){

    var checkingArray  = [];
    var colsArrays     = [[],[],[],[],[],[],[],[],[]];
    var squaresArrays  = [[],[],[],[],[],[],[],[],[]];

    for(var row = 0; row<9; row++){
        for(var col = 0; col<9; col++){
            if (puzzleTable[row][col].value === 0){
                return false;                                                                                                                                                       
            }
            checkingArray.push(puzzleTable[row][col].value);

            //filling col arrays
            // if(row===0){
            //     colsArrays[col] = [];
            // }
            colsArrays[col][row] = puzzleTable[row][col].value;

            squaresArrays[3*Math.floor(row/3) + Math.floor(col/3)].push(puzzleTable[row][col].value);
        }

        // checking rows
        if(containsDuplicates(checkingArray)){
            return false;
        }

        checkingArray = [];
    }

    for (checkingArray of colsArrays){
        if(containsDuplicates(checkingArray)){
            return false;
        }
    }

    for (checkingArray of squaresArrays){
        if(containsDuplicates(checkingArray)){
            return false;
        }
    }
    
    return true;
}

function containsDuplicates(arr) {
    var seen = {};
    var duplicate = false;

    for (var i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            duplicate = true;
            break;
        }
        seen[arr[i]] = true;
    }

    return duplicate;
}