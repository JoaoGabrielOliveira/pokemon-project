import React, { Component, Fragment } from 'react';

import axios from 'axios';

import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {

    state={
        url:'http://localhost:3001/api/v1/pokemon?order=id',
        pokemon: null
    };

    async   componentDidMount(){
        const res = await axios.get(this.state.url)
        console.log(res.data.pokemons);
        this.setState({pokemon:res.data.pokemons});
    }
    render() {
        return (
            <Fragment>
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
            </div>):(<h1>Loading</h1>)}
            </Fragment>
        )
    }
}
