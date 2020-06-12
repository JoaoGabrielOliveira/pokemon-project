import React, { Component } from 'react'
import {Link} from 'react-router-dom';

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
               <Link to="/home"><strong>Home</strong></Link>
                </div>
                <div className="noticia">
                 <a href="#"> <strong>Noticia</strong></a>  
                </div>
            </div>
      </div>
        )
    }
}
