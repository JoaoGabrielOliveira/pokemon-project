import React from "react";
import API from '../component/service/API'
import './index.css'

import _ from 'lodash';

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
        Noticias:null,
        altColors:[]
    }

    async componentDidMount()
    {
        const resNoticias = await API.getNews(9);
        const resCores = await API.getAllPokemonType('&color=');
        console.log(resNoticias);

        this.setState({Noticias:resNoticias, altColors:resCores});
    }

    ExibindoCard(min=0, max=2)
    {
        return(
        <>
            { this.state.Noticias ?
                (
                this.state.Noticias.slice(min, max).map(noticia => {
                    let colorValue ='#' + _.sample(this.state.altColors);

                    return(
                    <Card key={noticia.title} color={colorValue} title={noticia.title}>
                        
                        <Img  src={noticia.urlToImage}  />
                        <Parametros  Color={colorValue} titulo={noticia.title} />
                        <Pri text={noticia.description}>
                            <div style={{textAlign:"center"}}>
                                <a href='#'  data-toggle="modal" data-target="#exampleModal">[ Leia mais em {noticia.source.name} ]</a>
                            </div>
                        </Pri>
                    </Card>
                    );
                }))
            :(<h1>Carregando lista...</h1>)}
        </>
        );
        
    }

    render(){
        return(
        <div id='Noticia' style={styled}>
                
        <div className="divisorG">
                <h3>Destaque</h3>
        </div>
        <div className='row'>
            {this.ExibindoCard(0,3)}
        </div>

        <div className="divisor">
                <h3>Mundo Pokemon</h3>
        </div>
            <span>
                {this.ExibindoCard(3,9)}
            </span>

            
        </div>
        )
    } 
}