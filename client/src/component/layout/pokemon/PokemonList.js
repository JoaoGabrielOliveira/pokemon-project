import React, { Component, Fragment } from 'react';

import PokemonCard from './PokemonCard';
import Chip from '../outros/chip';
import './PokemonList.css';

import API from '../../service/API';

export default class PokemonList extends Component {

    state={
        url:'http://localhost:3001/api/v1/pokemon?order=id',
        pokemon:null,
        types:null,
        pesquisa:false
    }

    async Pesquisar(event)
    {
        await API.SeachPokemon(event);
        this.setState({pokemon:API.Pokemons});
    }
    
    async componentDidMount()
    {
        const res = await API.getAllPokemons('order=id');
        const pokemontypes = await API.getAllPokemonType();

        this.setState({pokemon:res});
        this.setState({types:pokemontypes});
    }

    async btnChange()
    {
        if(this.state.pesquisa)
        {
            document.getElementById('Pesquisa').style.left = '-100%';
            document.getElementById('pokemonlist').style.marginLeft = '-3%';
            this.setState({pesquisa:false});

            await API.getAllPokemons('order=id');
            this.setState({pokemon:API.Pokemons});
        }

        else
        {
            document.getElementById('Pesquisa').style.left = '2%';
            document.getElementById('pokemonlist').style.marginLeft = '17%';
            this.setState({pesquisa:true});
        }
    }

    collapeseOptions()
    {

    }

    AddOption()
    {
        alert('Fogo');
    }
    
    render() {

        const styled = {
            padding: "10px",
            
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            minHeight:'50vh'
          };   

        return (
            <Fragment>
            <div id='Pesquisa'>
                <div className="float">
                        <div className='my-float' onClick={() => this.btnChange()}> <i className="material-icons">search</i> </div>
                </div>

                <div className='search-box'>
                    <input className="form-control" onChange={(e) => this.Pesquisar(e) } placeholder='Digite o nome do pokemon:' />
                    
                    <a href="#" role="button">
                        [Mais opções]                        
                    </a>

                    < hr/>

                    <div id="moreOptions">
                        <div className='.flex-list'>
                            {this.state.types ?
                            (
                                this.state.types.map(type => (
                                    <Chip name={type.name} color={type.color} func={this.AddOption} />
                                ))
                            )
                            :
                            (
                                <h1>Não há nada</h1>
                            )}
                        </div>
                    </div>

                    <hr />
                </div>

                
            </div>
                
                
            {this.state.pokemon ?
                (<div className="row">
                {this.state.pokemon.map(pokemon => (
                    <PokemonCard
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        avatar={pokemon.avatar}
                        cor={pokemon.cor}
                   />
                ))}
            </div>):(<h1 style={styled}>Carregando lista...</h1>)}
            </Fragment>
        )
    }
}

