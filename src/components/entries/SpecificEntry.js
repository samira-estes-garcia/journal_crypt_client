import React from 'react';
import { Link } from 'react-router-dom';

class SpecificEntry extends React.Component {
    render() {
        const { entry } = this.props
        console.log(entry)
        return(
            <div className="p-3">
                <h1 className="text-center">{entry.title}</h1>
                <p>{entry.content}</p>
                {/* <p>Entry Id:{entry.id}</p>
                <p>User Id:{entry.user_id}</p> */}
                <div className="text-center">
                    <Link to={`/entries/${entry.id}/edit`} className="btn btn-outline-primary mr-3 px-4">Edit</Link>
                    <Link to="/entries//delete" className="btn btn-outline-danger px-3">Delete</Link>
                </div>
            </div>
        )
    }
}

export default SpecificEntry;