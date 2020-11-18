import React from 'react'
import EntryList from '../components/EntryList.js';
import { connect }  from 'react-redux'

class EntriesContainer extends React.Component {
    render() {
        return(
            <EntryList entries={this.props.entries} />
        )
    }
}

const mapStateToProps = state => ({ entries: state.entries })

export default connect(mapStateToProps)(EntriesContainer);