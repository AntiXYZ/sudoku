import React, { createContext, useReducer, useEffect } from 'react'
import { PuzzleReducer } from '../reducers/PuzzleReducer'
import { CheckSudoku } from '../Sudoku';

export const EASY_LEVEL = 35;
export const NORMAL_LEVEL = 30;
export const HARD_LEVEL = 25;

export const PuzzleContext = createContext();

const PuzzleContextProvider = (props) => {

    const [puzzle, dispatch] = useReducer(PuzzleReducer, [], () => {
        const localData = localStorage.getItem('puzzle');
        return localData ? JSON.parse(localData) : {filledQuantity:0, spentTime:0, isSolved:false, grid:[]}
    }); 

    useEffect(() => {
        localStorage.setItem('puzzle', JSON.stringify(puzzle));
    }, [puzzle]);

    useEffect(() => {
        if(!puzzle.isSolved && puzzle.filledQuantity === 81 && CheckSudoku(puzzle.grid))
            dispatch({type:'SET_SOLVED'});
    }, [puzzle]);

    return (
        <PuzzleContext.Provider value ={{puzzle, dispatch}}>
            { props.children }
        </PuzzleContext.Provider>
    )
}

export default PuzzleContextProvider
