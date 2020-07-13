import React from 'react';
import '../App.css';
import './Home.css'

import NavBar from '../component/layout/NavBar';

import Pokedex from'./lateral';

export default props =>
<div className="App" >
    
   <div >
   
    <h1>   <NavBar style={{margin:"-16px", maxHeight:'150px'}} text /></h1> 
    <div>
        <Pokedex/>
    </div> 

    </div>   
 
 
</div>