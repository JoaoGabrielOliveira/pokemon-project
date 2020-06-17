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
<<<<<<< HEAD
               <Link to="/home"><strong>Home</strong></Link>
=======
               <a href="#"><strong>Iníco</strong></a>
>>>>>>> e6766309f0d469a677311fe886f5788ca810c544
                </div>
                <div className="noticia">
                 <a href="#"> <strong>Noticia</strong></a>  
                </div>
            </div>
      </div>
        )
    }
}
