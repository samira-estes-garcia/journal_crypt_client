import React from 'react';
import { Link } from 'react-router-dom';

class SpecificEntry extends React.Component {
    render() {
        const { entry } = this.props
        console.log(entry)
        return(
            <div className="text-center">
                <h1>{entry.title}</h1>
                <p>{entry.content}</p>
                <p>Entry Id:{entry.id}</p>
                <p>User Id:{entry.user_id}</p>
                <Link to={`/entries/${entry.id}/edit`} className="btn btn-outline-primary">Edit</Link>
                <Link to="/entries//delete" className="btn btn-outline-danger">Delete</Link>
            </div>
        )
    }
}

export default SpecificEntry;