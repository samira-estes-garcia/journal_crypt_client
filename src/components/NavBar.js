import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/entries">Entries</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                {/* show profile if logged in, if not show login/signup */}
            </nav>
        )
    }
}

export default NavBar;