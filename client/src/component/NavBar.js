import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        let imagem = `https://www.apple-tribe.com/wp-content/uploads/2016/07/pokemon-pikachu-go-2.jpg`;
        let strongText = <strong style={{marginLeft:''}}>Pokedex</strong>;
        let links = [
            <a href="/">Início</a>,
            <a href="/pokemons">Pokedex</a>,
            <a href="/noticia">Notícia</a>,
            <a href="/contato">Contato</a>
        ];

        if (this.props.image != undefined )
            imagem = this.props.image;

        if (this.props.text == true)
            strongText = undefined; 
            else if(this.props.text != '')
            strongText = <strong style={{marginLeft:''}}>{this.props.text}</strong>;
             
             return (
                <nav className="navbar">
                    <nav className="T">
                        <div className="title">
                            <img src={imagem} style={this.props.style}/>
                        </div>
                        {strongText}
                    </nav> 
                <div className="menu">
                    <ul className="letra">
                        <li className="home">
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
            </nav>
        )
    }
}