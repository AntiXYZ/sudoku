import React from 'react'

const PuzzleCell = (props) => {

    const {value, hints} = props.puzzleCell;

    return (
        value===0 ?
            <div className="cell-value">
                <div className="hints-grid">
                    <span>{hints[0] ? 1 : " "}</span>
                    <span>{hints[1] ? 2 : " "}</span>
                    <span>{hints[2] ? 3 : " "}</span>
                    <span>{hints[3] ? 4 : " "}</span>
                    <span>{hints[4] ? 5 : " "}</span>
                    <span>{hints[5] ? 6 : " "}</span>
                    <span>{hints[6] ? 7 : " "}</span>
                    <span>{hints[7] ? 8 : " "}</span>
                    <span>{hints[8] ? 9 : " "}</span>
                </div>
            </div>
        : 
            <div className="cell-value">
                <div className="cell-value-container">{value}</div>
            </div>
    )
}

export default PuzzleCell
