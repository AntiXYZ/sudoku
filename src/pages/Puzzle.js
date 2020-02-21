import React, { useState, useContext } from 'react'
import PuzzleCell from '../components/layouts/PuzzleCell'
import { PuzzleContext } from '../components/contexts/PuzzleContext'

const Puzzle = (props) => {

    const {puzzle, dispatch} = useContext(PuzzleContext);

    const [activeRow, setActiveRow] = useState(0);
    const [activeCol, setActiveCol] = useState(0);

    const buttons = [1,2,3,4,5,6,7,8,9];

    return (
        <div style={{maxWidth:'400px'}} className="mx-auto  mt-2">
            <table className="table puzzle-table p-0">
                <tbody>
                    {
                        puzzle.grid.map( (puzzleRow, rowIndex) => {
                            return (
                                <tr key={"puzzleTableRow_"+ rowIndex} 
                                    className={"p-0 puzzle-row"+ (activeRow===rowIndex ? " active-row" : "")}
                                >
                                    {
                                        puzzleRow.map((puzzleCell, colIndex) => {
                                            return(
                                                <td key={"puzzleTableCell_" + rowIndex + "_" + colIndex} 
                                                    className={"p-0 puzzle-cell" 
                                                        + (activeCol===colIndex?" active-col":"")
                                                        + (activeCol===colIndex && activeRow===rowIndex?" active-cell":"")
                                                    }
                                                    onClick={()=>{
                                                        setActiveRow(rowIndex);
                                                        setActiveCol(colIndex);
                                                    }}
                                                >
                                                    <PuzzleCell puzzleCell={puzzleCell}/>
                                                </td>
                                            )})
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <div className="puzzle-buttons">
                {
                    buttons.map(
                        item => {
                            return(
                                <div key={"btnValueContainer_"+item} className="puzzle-button-container">
                                    <div key={"btnValue_"+item} 
                                         className={"puzzle-button" + (puzzle.grid[activeRow][activeCol].value === item ? " chosen ": "")}
                                         onClick={()=>dispatch({type: 'SET_VALUE', row: activeRow, col: activeCol, value: item})}
                                    >{item}</div>
                                </div>
                            )
                        }
                    )
                }
            </div>

            <div className="puzzle-buttons">
                {
                    buttons.map(
                        item => {
                            return(
                                <div key={"btnHintContainer_"+item} className="puzzle-button-container">
                                    <div key={"btnHint_"+item} 
                                         className={"puzzle-button hint-button-" + item
                                                    + (puzzle.grid[activeRow][activeCol].hints[item-1] ? " chosen ": "")
                                         }
                                         onClick={()=>dispatch({type: 'SET_HINT', row: activeRow, col: activeCol, hint: item-1})}
                                    >{item}</div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Puzzle
