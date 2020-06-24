import React, { Component } from 'react'
import Esquerda from './home/esquerda.jpg'
import Direita from './home/direita.jpg'
import Esse from './home/esse.png'

import './home/index.css'

export default class Home extends Component {
    render() {
        return (
            <div>
            <meta charSet="UTF-8" />
            <scrip href="https://icons8.com/icon/16460/pokedex">
              <link href="index.css" rel="stylesheet" />
              <title>PokeDex</title>
              <div id="Home">
                <div className="img">
                  <div className="es">
                    <img src={Esquerda} width="auto" height="1450vh" />
                  </div>
                  <div className="di">
                    <img src={Direita} width="auto" height="1450vh" />
                  </div>
                  <div>
                    <div className="logo">
                      <img src={Esse
                    } width="800px" />
                    </div>
                    <nav className="menu">
                      <a href="/"><h5>Home</h5></a>
                      <a href="/pokemons"><h5>Pokédex</h5></a>
                      <a href="/noticias"><h5>Notícias</h5></a>
                    </nav>
                    <div className="frase">
                      <h1>Frase </h1>
                    </div>
                    <div className="pesquisa">
                      <input className="barra" type="text" placeholder="Pesquise" />
                      <input className="barra" type="submit" style={{display: 'none'}} />
                      <label className="btn " htmlFor="btn">
                        <img src="https://img.icons8.com/color/45/000000/pokedex.png" />
                      </label>
                    </div>
                    <div className="ash">
                      <img src="https://4.bp.blogspot.com/-xZCLBO8q8CI/UmnYd36HNGI/AAAAAAAAFKI/8MT3HGTfqHE/s320/250px-Ash_XY.png" />    
                    </div>
                  </div>
                </div>
              </div></scrip></div>
        );
    }
}