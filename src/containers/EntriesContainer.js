import React from 'react'
import EntryList from '../components/EntryList.js';
import EntryForm from '../components/EntryForm.js';
import { connect }  from 'react-redux'
import { fetchEntries } from '../actions/entryActions';

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
                <h1>Journal Entries</h1>
                {this.handleLoading()}
                <EntryForm />
            </div>
        )
    }
}

const mapStateToProps = globalState => ({ entries: globalState.entries, loading: globalState.loading })

const mapDispatchToProps = dispatch => {
    return {
        fetchEntriesDispatch: () => {
            dispatch(fetchEntries())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer);