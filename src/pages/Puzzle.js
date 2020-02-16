import React, { useState } from 'react'
import PuzzleCell from '../components/layouts/PuzzleCell'

const Puzzle = () => {

    const [puzzleTable, setPuzzleTable] = useState([
        [1,3,3, 4,5,6, 7,8,9],
        [4,0,0, 4,5,6, 7,8,9],
        [3,0,0, 4,5,6, 7,8,9],

        [4,2,3, 4,5,6, 7,8,9],
        [5,2,3, 4,5,6, 7,8,9],
        [6,2,3, 4,5,6, 7,8,9],

        [7,2,3, 4,5,6, 7,8,9],
        [8,2,3, 4,5,6, 7,8,9],
        [9,2,3, 4,5,6, 7,8,9]
    ])

    const buttons = [1,2,3,4,5,6,7,8,9];

    return (
        <div style={{maxWidth:'400px'}} className="mx-auto">
            <table className="table puzzle-table p-0">
                <tbody>
                    {
                        puzzleTable.map( (puzzleRow, rowIndex) => {
                            return (
                                <tr key={"puzzleTableRow_"+ rowIndex} className="p-0 puzzle-row">
                                    {
                                        puzzleRow.map((puzzleCell, cellIndex) => {
                                            return(
                                                <td key={"puzzleTableCell_" + rowIndex + "_" + cellIndex} 
                                                    // id= {"puzzleTableCell_" + rowIndex + "_" + cellIndex} 
                                                    className="p-0 puzzle-cell"
                                                    // onClick={()=>{
                                                    //     let cell = document.getElementById("puzzleTableCell_" + rowIndex + "_" + cellIndex);
                                                    //     console.log("puzzleTableCell_" + rowIndex + "_" + cellIndex);
                                                    //     console.log(cell);
                                                    //     document.getElementById("puzzleTableCell_" + rowIndex + "_" + cellIndex).classList.add("active-cell");
                                                    // }}
                                                >
                                                    <PuzzleCell value={puzzleCell}/>
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
                                    <div key={"btnValue_"+item} className="puzzle-button">{item}</div>
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
                                    <div key={"btnHint_"+item} className={"puzzle-button hint-button-"+item}>{item}</div>
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
