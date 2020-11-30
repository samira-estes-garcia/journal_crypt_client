import React from 'react';
import { Link } from 'react-router-dom'

class Entry extends React.Component {
    render() {
        const { entry } = this.props
        return (
            <div>
                <h1><Link to={`/entries/${entry.id}`}>{entry.title}</Link></h1>
                <p>{entry.content}</p>
                <p>Entry Id:{entry.id}</p>
                <p>User Id:{entry.user_id}</p>
            </div>
        )
    }
}

export default Entry;