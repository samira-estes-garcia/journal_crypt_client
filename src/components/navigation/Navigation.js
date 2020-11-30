import React from 'react'
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        }
    }

    render() {
        if (this.props.token) {
            if (!this.state.loggedIn) {
                this.setState({
                    loggedIn: true
                });
            }
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
              </li>
              {
                  this.state.loggedIn ?
                  <div>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/entries">Entries</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/users/:userId">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact className="nav-link" to="/logout">Log Out</NavLink>
                    </li>
                 </div>
                 :
                 <div>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/login">Log In</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/signup">Sign Up</NavLink>
                    </li>
                </div>
              }
          </ul>
    </nav>
        )
    }
};

export default Navigation;