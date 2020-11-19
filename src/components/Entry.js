import React from 'react';

class Entry extends React.Component {
    render() {
        const { entry } = this.props
        return (
            <div>
                <h1>{entry.title}</h1>
                <p>{entry.content}</p>
                <p>Entry Id:{entry.id}</p>
            </div>
        )
    }
}

export default Entry;