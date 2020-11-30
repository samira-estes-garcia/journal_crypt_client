import React from 'react';
import '../stylesheets/App.css';
import Home from '../components/navigation/Home'
import Login from '../components/navigation/Login'
import Logout from '../components/navigation/Logout'
import EntriesContainer from '../containers/EntriesContainer.js';
import EntryInfo from '../containers/EntryInfo';
import EntryAdd from '../components/entries/EntryAdd';
import EntryEdit from '../components/entries/EntryEdit';
import Profile from '../components/navigation/Profile'
import Navigation from '../components/navigation/Navigation'
import Signup from '../components/navigation/Signup'
import { createEntry } from '../actions/entryActions';
import { connect }  from 'react-redux'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation token={localStorage.getItem("jwt")} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/entries" component={EntriesContainer} />
          <Route exact path="/entries/new" render={(props) => (
            <EntryAdd {...props} createEntry={this.props.createEntryDispatch} />
          )} />
          <Route exact path="/entries/:id" component={EntryInfo} />
          <Route exact path="/entries/:id/edit" component={EntryEdit} />
          <Route exact path='/users/:userId' component={Profile} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = globalState => ({ entries: globalState.entries, loading: globalState.loading })

const mapDispatchToProps = dispatch => {
  return {
      createEntryDispatch: (object, history) => {
          dispatch(createEntry(object, history))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

 