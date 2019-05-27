import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

// Components Impors
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import ProfilePage from './components/ProfilePage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navigation/>
            <hr/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/profile" component={ProfilePage}/>
          </Fragment>
        </Router>
      </div>
    )
  }
}
