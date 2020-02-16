import React from 'react'
import NotificationList from '../components/layouts/NotificationList'
import { Link } from 'react-router-dom'

const Home = () => {
    const newGameID = 1;
    const lastGameID = 10;

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-12 col-sm-6">
                    <div className="container">
                        <Link to={"puzzle/"+ newGameID} className="btn btn-secondary btn-block">New game</Link>
                        <Link to={"puzzle/"+ lastGameID} className="btn btn-secondary btn-block">Load game</Link>
                    </div>
                </div>

                <div className="col-12 col-sm-6">
                    <NotificationList />
                </div>
            </div>
        </div>
    )
}

export default Home
