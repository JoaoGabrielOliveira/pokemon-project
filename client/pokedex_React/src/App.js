import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
//import Home from './Home';
import NavBar from './component/layout/NavBar';
import Dashboard from './component/layout/Dashboard';
import Pokemon from './component/layout/pokemon/Pokemon';


class App extends Component {
  render() {
    return ( 
      <Router>
       
        <div className="App">
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;