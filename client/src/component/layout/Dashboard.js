import React, { Component } from 'react';
import PokemonList from '../layout/pokemon/PokemonList';

import API from '../service/API';


export default class Dashboard extends Component {

    render() {
        
        return (
            <div className='body'>
                <div className='container'>
                    <div id='pokemonlist' className='col'>
                        <PokemonList pokemon={API.Pokemons}/>
                    </div>
                </div>
            </div>
        )
    }
}
