import React, { Component } from 'react';

import PokemonList from '../layout/pokemon/PokemonList';

import Pesquisa from './pokemon/pesquisa'

export default class Dashboard extends Component {
    render() {
        return (
            <>
            <div className='col'>
                <Pesquisa />
            </div>
            
            <div className='container'>
                <div id='pokemonlist' className='col'>
                        <PokemonList />
                </div>
            </div>
            </>
        )
    }
}
