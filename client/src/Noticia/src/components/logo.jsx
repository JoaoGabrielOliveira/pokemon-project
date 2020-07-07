import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '/home/bionexo/projetoaprendizes/client/src/Noticia/src/components/App.css';
export default class logo extends Component {
    render() {
        let lik = <a href="/">Início</a>
        let link = <a href="/Pokemons">Pokedex</a>
        let like = <a href="/">Notícia</a>
        let lke = <a href="/">Contato</a>
        
        return (
            <div>
                <nav className="navbar">
                  
                  <nav className="tex">
                    <strong>Notícia</strong>
                    <div className="title">
                   <img src="https://cdn.bulbagarden.net/upload/thumb/1/1e/Detective_Pikachu_artwork_3.png/153px-Detective_Pikachu_artwork_3.png"/>             
                     </div>
                    
                  </nav> 
                   <div className="menu">
                <ul className="letra">
                    <li className="home">
                        {lik}
                        </li>
                        <li className="Pokedex">
                        {link}
                        </li>
                            <li className="Noticia">
                            {like} 
                        </li>
                            <li className="Notacao">
                            {lke} 
                            </li>
                            </ul>
     
      </div>   
              </nav>
             
            </div>
      
        )
    }
}
