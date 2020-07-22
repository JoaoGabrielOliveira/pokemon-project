import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.js'
import 'popper.js/dist/popper.js'

import  './App.css';

import Home from './paginas/Home/Home.jsx';
import Dashboard from './paginas/deshbord/Dashboard';
import Pokemon from './paginas/pokemon/Pokemon';

import Noticia from './paginas/Noticia/index';
import Cont from './paginas/Contatos/cont.jsx'


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
              <Route exact path="/contato" component={Cont} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;