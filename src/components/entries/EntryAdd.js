import React from 'react'

class EntryAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            user_id: localStorage.getItem("user_id"),
        };
    };

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createEntry(this.state, this.props.history)
        this.setState({
            title: '',
            content: '',
        })
        //this.props.history.push(`/entries/${this.props.createEntry.data.id}`);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Create A New Entry</h1>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Title</label>
                    <input 
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={(event) => this.handleOnChange(event)}
                    />
                    <br></br>
                    <label>Content</label>
                    <textarea 
                        type="text"
                        name="content"
                        value={this.state.content}
                        onChange={(event) => this.handleOnChange(event)}
                    /><br></br>
                    <input type="submit" /> 
                </form>
            </div>
        )
    }
}

export default EntryAdd;