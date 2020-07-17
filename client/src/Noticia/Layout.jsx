import React from "react";
import API from '../component/service/API'
import './index.css'


import Pri from './components/Pri.jsx';
import Card from './components/card/Card';
import Img from './components/img';
import Parametros from './components/Parametros';

const styled = {
    display:'flex',
    flexWrap: 'wrap',
    paddingTop: "10px",
    padding:'90px'
}

export default class Layout extends React.Component {
    
    state={
        Noticias:null
    }

    async componentDidMount()
    {
        let Bom = [];

        const resNoticias = await API.getNews(5);
        this.setState({Noticias:resNoticias});
    }

    render(){

        return(
        <div id='Noticia' style={styled}>
                
        <div className="divisorG">
                <h3>Games</h3>
        </div>
        
        <span>
            {this.state.Noticias ?
                        (
                        this.state.Noticias.map(noticia => (
                            <Card key='1' color='#00BFFF'>
                                <Img  src={noticia.urlToImage}  />
                                <Parametros  Color='#00BFFF'titulo={noticia.title} /> 
                                <Pri text={noticia.content}  />
                            </Card>
                        )))
                    :(<h1 style={styled}>Carregando lista...</h1>)}
        </span>

        <div className="divisor">
                <h3>Mundo Pokemon</h3>
        </div>
            <span>
            
            <Card color="#FFB6C1">
                <Img />
                <Parametros Color="#FFB6C1" titulo="Chamado 'New Pokémon Snap', game coloca jogador em uma ilha para fotografar monstrinhos"/>
                <Pri text="A Nintendo anunciou nesta quarta-feira, 17, New Pokémon Snap, um novo jogo para o Switch no qual o objetivo do jogador não é capturar ou batalhar, e sim fotografar os monstrinhos." />
            
            </Card>
            <Card color='#EE82EE'>
                <Img /> 
                <Parametros Color='#EE82EE' titulo="Pokémon GO: Mega Evolução é anunciada e chega ao jogo ainda em 2020" />
                <Pri text="De acordo com as informações divulgadas, o título será gratuito para iniciar (ou seja, provavelmente será necessário pagar para liberar elementos adicionais) e envolve servir as criaturas que chegam em seu café com drinques e pratos específicos. Preparar cada um deles envolve a resolução de um puzzle, sendo necessário arrastar o ícone de um pokémon para a mesma categoria à qual ele pertence." />
            
            </Card>
        
            <Card color='#9400D3' >
                <Img />
                <Parametros Color='#9400D3' titulo="Chamado 'New Pokémon Snap', game coloca jogador em uma ilha para fotografar monstrinhos"/>
                <Pri text="A Nintendo anunciou nesta quarta-feira, 17, New Pokémon Snap, um novo jogo para o Switch no qual o objetivo do jogador não é capturar ou batalhar, e sim fotografar os monstrinhos." />
            
            </Card>

            <Card color='#FFFF00' >
                <Img />
                <Parametros Color='#FFFF00' titulo="Chamado 'New Pokémon Snap', game coloca jogador em uma ilha para fotografar monstrinhos"/>
                <Pri text="A Nintendo anunciou nesta quarta-feira, 17, New Pokémon Snap, um novo jogo para o Switch no qual o objetivo do jogador não é capturar ou batalhar, e sim fotografar os monstrinhos." />
            
            </Card>
            
            </span>

        </div>
        )
    } 
}