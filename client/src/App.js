import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import  './App.css';

import Home from './Home/Home';
import Dashboard from './component/layout/Dashboard';
import Pokemon from './component/layout/pokemon/Pokemon';

import Noticia from './Noticia/index';


class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div className="App">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemons" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
              <Route exact path="/noticia" component={Noticia} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;