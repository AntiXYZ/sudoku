import { GenerateSudoku } from "../Sudoku";

export const PuzzleReducer = (state, action) => {
    switch(action.type){

        case 'GENERATE_SUDOKU': {
            let newState = GenerateSudoku(action.level);
            return newState;
        }
        case 'SET_VALUE': {
            let newState = {...state};
            if(newState.grid[action.row][action.col].value === 0){
                newState.filledQuantity++;
            }
            else if(newState.grid[action.row][action.col].value === action.value){
                newState.filledQuantity--;
            }
            newState.grid[action.row][action.col].value = newState.grid[action.row][action.col].value === action.value ? 0: action.value;
            return newState;
        }
        case 'SET_HINT':{
            let newState = {...state};
            newState.grid[action.row][action.col].hints[action.hint] = !newState.grid[action.row][action.col].hints[action.hint];
            return newState;
        }
        default:
            return state;
    }
}
