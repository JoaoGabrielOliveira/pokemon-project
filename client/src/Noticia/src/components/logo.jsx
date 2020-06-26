import React, { Component } from 'react'
import './layout/Card.css';
import Logo from './img/Logo.jpg';
let link = <a href="/client/src/component/layout/Dashboard.js"><strong >Pokedex</strong></a>
let like = <a href="/client/src/Noticia/src/App.jsx"><strong >Noticia</strong></a>

export default props =>
    <div>
      <nav className="navbar">  
          <nav className="title">
           <img src={Logo} height='200px'></img>
          <strong>Noticia</strong> 
          </nav>
      </nav>
      <div className="menu">
        <div className="home">
        {link}
        </div>
            <div className="noticia">
            {like} 
        </div>
      </div>
    </div>
