import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import  './App.css';
import NavBar from './component/layout/NavBar';
import Home from './Home/Home.jsx';
import Dashboard from './component/layout/Dashboard';
import Pokemon from './component/layout/pokemon/Pokemon';


class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div className="App">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemons" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;