import React, { Component } from 'react'
import '../../App.css'

export default class menuCont extends Component {
    render() {
       
        let links = [
            <a href="/">Início</a>,
            <a href="/Pokemons">Pokedex</a>,
            <a href="/Noticia">Notícia</a>,
            <a href="/Contato">Contato</a>
        ];

        
             
             return (
                 <div style={{marginTop:"-150px"}}>
           
                <div className="menu" >
                   
                    <ul className="letra">
                    <li>  <img  src="https://img.icons8.com/material-rounded/30/000000/filled-sent.png" /><strong style={{fontFamily:"fantasy", fontSize:"20px"}}> Contato</strong></li>
                        <li className="home" style= {{marginLeft:"150px"}}>
                            {links[0]}
                        </li>

                        <li className="Pokedex">
                            {links[1]}
                        </li>

                        <li className="Noticia">
                            {links[2]}
                        </li>

                        <li className="Notacao">
                            {links[3]}
                        </li>
                    </ul>
                </div>   
            </div>
        )
    }
}