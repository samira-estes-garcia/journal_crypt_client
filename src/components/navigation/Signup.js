import React from 'react'

class Signup extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const request = {"user": {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": password
        }};
        fetch("http://localhost:3001/api/users", {
            method: "POST",
            body: JSON.stringify(request),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.props.history.push('/login');
        })
        .catch(error => console.log('error', error))
    }

    render() {
        return (
           <div className="p-3">
               <h1 className="text-center">Sign Up</h1>
               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input name="first-name" id="first-name" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input name="last-name" id="last-name" type="text" className="form-control" />
                    </div>
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

export default Signup