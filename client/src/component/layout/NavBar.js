import React, { Component } from 'react'

import styled from 'styled-components';
//import Home from '/home/bionexo/projetoaprendizes/client/Pokedex/index.html';


export default class NavBar extends Component {
    render() {
        let link = <a href="/"><strong>Iníco</strong></a>
        
        return (
            <div>
               
              <nav className="navbar">
                  <nav className="title">
                      
                     <strong>Pokedex</strong> 
                  </nav>
              </nav>
              <div className="menu">
               <div className="home">
               {link}
                </div>
                <div className="noticia">
                 <a href="/noticias"> <strong>Noticia</strong></a>  
                </div>
            </div>
      </div>
        )
    }
}
