import React, {useContext} from 'react'
// import NotificationList from '../components/layouts/NotificationList'
import { Link } from 'react-router-dom'
import { PuzzleContext, EASY_LEVEL, NORMAL_LEVEL, HARD_LEVEL } from '../components/contexts/PuzzleContext'

const Home = () => {

    const { puzzle, dispatch } = useContext(PuzzleContext);

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-12 mx-auto" style={{maxWidth:'400px'}}>
                    <div className="container">
                        <Link to={"puzzle"} onClick = {()=>dispatch({type: 'GENERATE_SUDOKU', level: EASY_LEVEL})} className="btn btn-secondary btn-block">Easy</Link>
                        <Link to={"puzzle"} onClick = {()=>dispatch({type: 'GENERATE_SUDOKU', level: NORMAL_LEVEL})} className="btn btn-secondary btn-block">Normal</Link>
                        <Link to={"puzzle"} onClick = {()=>dispatch({type: 'GENERATE_SUDOKU', level: HARD_LEVEL})} className="btn btn-secondary btn-block">Hard</Link>
                        {(!puzzle || puzzle.filledQuantity === 0 || puzzle.isSolved) 
                            ?  null
                            : <Link to={"puzzle"} className="btn btn-secondary btn-block">Load game</Link>
                        }
                    </div>
                </div>

                {/* <div className="col-12 col-sm-6">
                    <NotificationList />
                </div> */}
            </div>
        </div>
    )
}

export default Home
