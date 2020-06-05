import React, { Component } from 'react'

import styled from 'styled-components';
//import Home from '/home/bionexo/projetoaprendizes/client/Pokedex/index.html';


export default class NavBar extends Component {
    render() {
        return (
            <div>
               
              <nav className="navbar">
                  <nav className="title">
                      
                     <strong>Pokedex</strong> 
                  </nav>
              </nav>
              <div className="menu">
               <div className="home">
               <a href="#"><strong>Home</strong></a>
                </div>
                <div className="noticia">
                 <a href="#"> <strong>Noticia</strong></a>  
                </div>
            </div>
      </div>
        )
    }
}
