import React from 'react'

class Login extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    // handleOnChange = event => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.props.loginUser(this.state)
    //     this.setState({
    //         email: '',
    //         password: '',
    //     })

    // }

    handleSubmit = (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const request = {"auth": {"email": email, "password": password}};
        //refactor all fetch requests into action creators
        fetch('http://localhost:3001/api/user_token', {
            method: 'POST',
            body: JSON.stringify(request),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("jwt", data.jwt);
            localStorage.setItem("user_id", data.userDetails.id);
            localStorage.setItem("first_name", data.userDetails.first_name);
            console.log(localStorage.getItem('user_id'));
            //dispatch user info into global state
            this.props.history.push('/entries');
            //force rerender app
        })
        .catch(error => console.log('error', error));
    }

    render() {
        return(
        <div className="text-center">
            <h1>Log In</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                        <input name="email" id="email" type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                        <input name="password" id="password" type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
        )
    }
}

export default Login;