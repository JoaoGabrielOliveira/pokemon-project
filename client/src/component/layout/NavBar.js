import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../Home/img/Logo.jpg';


export default class NavBar extends Component {
    render() {
        let link = <a href="/"><strong>Iníco</strong></a>
        
        return (
            <div>
               
              <nav className="navbar">
                  <nav className="title">
                  <img src={Logo} height='200px' />
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
