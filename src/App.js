import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import NavBar from './components/NavBar'
import EntriesContainer from './containers/EntriesContainer.js'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/entries" component={EntriesContainer} />
            <Route path="/profile"/>
          </Switch>
    </Router>
  );
}

export default App;

 