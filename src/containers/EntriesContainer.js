import React from 'react'
import EntryList from '../components/entries/EntryList.js';
import { connect }  from 'react-redux'
import { fetchEntries } from '../actions/entryActions';
import { createEntry } from '../actions/entryActions';
import { Link } from 'react-router-dom'

class EntriesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchEntriesDispatch();
    }

    handleLoading = () => {
        if(this.props.loading) {
            return <div>Loading...</div>
        } else {
            return <EntryList />
        }
    }

    render() {
        return(
            <div>
                <div className="d-flex justify-content-center">
                    <h1>Journal Entries</h1>
                    <Link to="/entries/new" className="btn btn-outline-success">Create Entry</Link>
                </div>
                {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = globalState => ({ entries: globalState.entries, loading: globalState.loading })

const mapDispatchToProps = dispatch => {
    return {
        fetchEntriesDispatch: () => {
            dispatch(fetchEntries())
        },
        createEntryDispatch: (object) => {
            dispatch(createEntry(object))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer);