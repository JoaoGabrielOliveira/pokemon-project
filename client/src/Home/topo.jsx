import React from 'react';
import Logo from './img/poke.jpg';
import Pi from './img/316388154274211.png'
//import '/home/bionexo/projetoaprendizes/client/src/Noticia/src/App.jsx'
import './homeconf.css';
let link = <a href="/pokemons"><strong >Pokedex</strong></a>
let like = <a href="/client/src/Noticia/src/App.jsx"><strong >Noticia</strong></a>

export default props =>
    <div className="topo">
      <nav className="navbar">  
          <nav className="title">
            <img src={Logo} height='200px' />
            <img src={Pi} height='200px' />
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
