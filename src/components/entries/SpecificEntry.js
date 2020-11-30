import React from 'react';

class SpecificEntry extends React.Component {
    render() {
        const { entry } = this.props
        return(
            <div>
                <h1>{entry.title}</h1>
                <p>{entry.content}</p>
                <p>Entry Id:{entry.id}</p>
                <p>User Id:{entry.user_id}</p>
            </div>
        )
    }
}

export default SpecificEntry;