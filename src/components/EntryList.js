import React from 'react';
import Entry from './Entry.js';
import { connect } from 'react-dom';

class EntryList extends React.Component {
    render() {
        const { entries } = this.props
        const entryList = entries.map(entryObj => {
            return (
                <Entry
                    key={entryObj.id}
                    entry={entryObj}
                />
            )
        })
        return(
            <ul>
                {entryList}
            </ul>
        )
    }
}

export default EntryList;