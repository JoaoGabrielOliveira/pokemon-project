import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
<<<<<<< HEAD

=======
//import Home from './Home';
>>>>>>> e6766309f0d469a677311fe886f5788ca810c544
import NavBar from './component/layout/NavBar';

import Home from './component/layout/Home';
import Dashboard from './component/layout/Dashboard';
import Pokemon from './component/layout/pokemon/Pokemon';
import pesquisa from './component/layout/pokemon/pesquisa'


class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
       
        <div className="App">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemons" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
              <Route exact path="/pesquisa" component={pesquisa} />
            </Switch>
        </div>
<<<<<<< HEAD
      </BrowserRouter>
=======
      </Router >
>>>>>>> e6766309f0d469a677311fe886f5788ca810c544
    );
  }
}

export default App;