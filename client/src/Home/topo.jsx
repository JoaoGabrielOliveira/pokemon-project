import React, { Component } from 'react'
import '../App.css'

export default class NavBar extends Component {
    render() {
        let lik = <a href="/">Início</a>
        let link = <a href="/Pokemons">Pokedex</a>
        let like = <a href="../Noticia/src/App.jsx">Notícia</a>
        let lke = <a href="/">Contato</a>
        
        
        return (
            <div><nav className="navbar">
               
                  
                  <nav className="title">
                    <img src="https://www.apple-tribe.com/wp-content/uploads/2016/07/pokemon-pikachu-go-2.jpg" height="150px"  style={{margin:"-16px"}}/>              
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