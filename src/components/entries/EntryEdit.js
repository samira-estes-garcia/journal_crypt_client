import React from 'react'
import { connect }  from 'react-redux';
import { fetchEntry } from '../../actions/entryActions';

class EntryEdit extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: '',
            id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }

    componentDidMount() {
        this.props.fetchEntryDispatch(this.props.match.params.id);
        console.log(this.props);
        this.setState({
            title: this.props.entry.title,
            content: this.props.entry.content,
            id: this.props.entry.id
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let token = "Bearer " + localStorage.getItem("jwt");
        let data = this.state
        console.log(data);
        fetch(`http://localhost:3001/api/entries/${this.state.id}`, {
            method: "PATCH",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(function(response){
            return response.json()
        }).then(responseJSON => {
            //console.log(this.props)
            this.props.history.push(`/entries/${responseJSON.id}`);
        }).catch(error => ('error', error));
    }

    handleCancel = () => {
        this.props.history.push(`/entries/${this.state.id}`)
    }


    render() {
        console.log(this.state)
        return (
            <div className="text-center">
                <h1>{this.state.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" value={this.state.title} className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea type="text" name="content" value={this.state.content} className="form-control" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-success">Update</button>
                    <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = globalState => ({ entry: globalState.entry, loading: globalState.loading }) 

const mapDispatchToProps = dispatch => {
    return {
        fetchEntryDispatch: (id) => {
            dispatch(fetchEntry(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryEdit);