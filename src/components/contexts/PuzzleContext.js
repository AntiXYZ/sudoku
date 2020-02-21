import React, { createContext, useReducer, useEffect } from 'react'
import { PuzzleReducer } from '../reducers/PuzzleReducer'
import { CheckSudoku } from '../Sudoku'

export const EASY_LEVEL = 35;
export const NORMAL_LEVEL = 30;
export const HARD_LEVEL = 25;

export const PuzzleContext = createContext();

const PuzzleContextProvider = (props) => {

    const [puzzle, dispatch] = useReducer(PuzzleReducer, [], () => {
        const localData = localStorage.getItem('puzzle');
        return localData ? JSON.parse(localData) : {filledQuantity:0, spentTime:0, grid:[]}
    }); 

    useEffect(() => {
        localStorage.setItem('puzzle', JSON.stringify(puzzle));
    }, [puzzle]);

    useEffect(() => {
        if(puzzle.filledQuantity === 81){
            if (CheckSudoku(puzzle.grid)){
                console.log("Congratulations, you have solved sudoku!!!");
            }
            else{
                console.log("Try one more time");
            }
        }
    }, [puzzle.filledQuantity, puzzle.grid]);

    return (
        <PuzzleContext.Provider value ={{puzzle, dispatch}}>
            { props.children }
        </PuzzleContext.Provider>
    )
}

export default PuzzleContextProvider
