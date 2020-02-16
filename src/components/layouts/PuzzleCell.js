import React, {useState} from 'react'

const PuzzleCell = (props) => {

    const {value, hints} = props;

    return (
        value===0 ?
            <table className="table table-borderless p-0 m-0 hints-table">
                <tbody>
                    <tr>
                        <td className="p-0 hint-cell">1</td>
                        <td className="p-0 hint-cell">2</td>
                        <td className="p-0 hint-cell">3</td>
                    </tr>
                    <tr>
                        <td className="p-0 hint-cell">4</td>
                        <td className="p-0 hint-cell">5</td>
                        <td className="p-0 hint-cell">6</td>
                    </tr>
                    <tr>
                        <td className="p-0 hint-cell">7</td>
                        <td className="p-0 hint-cell">8</td>
                        <td className="p-0 hint-cell">9</td>
                    </tr>
                </tbody>
            </table>
        : 
            <div className="cell-value">
                <div className="cell-value-container">{value}</div>
            </div>
    )
}

export default PuzzleCell
