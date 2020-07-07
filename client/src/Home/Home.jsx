import React from 'react';
import '../App.css';
import './Home.css'
import Menu from './topo.jsx';
import Pokedex from'./lateral';

export default props =>
<div className="App" >
    
   <div >
   
    <h1>   <Menu/></h1> 
    <div ><Pokedex/></div> 

    </div>   
 
 
</div>