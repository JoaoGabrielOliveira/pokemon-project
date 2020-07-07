import React, { Component } from 'react'

import '../../App.css'
export default class NavBar extends Component {
    render() {
        let lik = <a href="/">Início</a>
        let link = <a href="/">Pokedex</a>
        let like = <a href="/">Notícia</a>
        let lke = <a href="/">Contato</a>
        
        return (
            <div>
                <nav className="navbar">
                  
                  <nav className="tex">
                    <div className=" title">
                   <img src="https://img.icons8.com/officel/80/000000/pokedex.png" style={{padding:"20px"}}/>             
                   </div>
                   <strong>Pokedex</strong>
                    
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
