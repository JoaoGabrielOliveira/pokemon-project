import React, { Component } from 'react'
import './layout/Card.css';

export default class logo extends Component {
    render() {
        return (
            <div>
                 <div>
               
               <nav className="navbar">
                   <nav className="title">
                       
                      <strong>Noticia</strong>
                   </nav>
               </nav>
               <div className="menu">
                <div className="home">
                <a href="#"><strong>Iníco</strong></a>
                 </div>
                 <div className="Pokedex">
                  <a href="#"> <strong>Pokedex</strong></a>  
                 </div>
             </div>
       </div>
            </div>
        )
    }
}
