import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const NotificationItem = () => {
    const title = 'Michael beat the record';
    const detail = "completed puzzle #100 for 35 minutes"
    const createdAt = new Date(2020,1,10,11,21,12);
    const puzzleId = 100;

    return (
        <div className="card mb-2">
            <div className="card-header p-1">
                {title}
            </div>
            <div className="card-body p-2">
                <p className="card-text">{detail}</p>
            </div>

            <div className="card-footer text-muted p-1">
                <div className="row">
                    <div className="col-8">
                        <div className ="container align-middle">{moment(createdAt).fromNow()}</div>
                    </div>
                    <div className="col-4">
                        <Link to={"puzzle/"+puzzleId} className="btn btn-link ml-auto p-0">beat it</Link>
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default NotificationItem
