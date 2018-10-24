import React, { Component } from 'react';
import store from './js/store/index'
import logo from './logo.svg';
import './App.css';
import { AxiosCallCities } from './RestHandlers/AxiosRest';
import { BrowserRouter as Router, Route, Link, AppLayout } from "react-router-dom";
import Front from './Front'
class App extends Component {

  componentWillMount() {
    AxiosCallCities();
  }

  render() {

    return (
      <Router>
        <div>
          <Route exact path="/" component={Front} />
        </div>
      </Router>
    );
  }
}

export default App;
