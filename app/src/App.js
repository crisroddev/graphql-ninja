import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navigation/>
            <hr/>
            <Route path="/login" component={}/>
            <Route path="/register" component={}/>
          </Fragment>
        </Router>
      </div>
    )
  }
}
