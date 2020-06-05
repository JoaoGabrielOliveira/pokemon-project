  import React, { Component } from 'react';


//import logo from ''; // img src={logo} className="App-logo" alt="logo"

import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';
import Dashboard from './component/layout/Dashboard';
import NavBar from './component/layout/NavBar';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
         <div className="container">
           <Dashboard />
         </div>

      </div>
        

        
      
    );
  }
}

export default App;
