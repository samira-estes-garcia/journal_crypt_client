import React from 'react'
import { connect }  from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEntry } from '../actions/entryActions';
import SpecificEntry from '../components/entries/SpecificEntry';

class EntryInfo extends React.Component {

    componentDidMount() {
        this.props.fetchEntryDispatch(this.props.match.params.id);
    }

    handleLoading = () => {
        if(this.props.loading) {
            return <div>Loading...</div>
        } else {
            return <SpecificEntry entry={this.props.entry} />
        }
    }

    render() {
        return(
            <div>
               {this.handleLoading()}
            </div>
        )
    }
}

const mapStateToProps = globalState => ({ entry: globalState.entry, loading: globalState.loading })

const mapDispatchToProps = dispatch => {
    return {
        fetchEntryDispatch: (id) => {
            dispatch(fetchEntry(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryInfo);