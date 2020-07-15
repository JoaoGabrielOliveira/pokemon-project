import React, { Component } from 'react';
import PokemonList from '../layout/pokemon/PokemonList';

import Navbar from './NavBar';

import API from '../service/API';


export default class Dashboard extends Component {

    render() {
        
        return (
            <>
            <Navbar image="https://img.icons8.com/officel/80/000000/pokedex.png" style={{padding:'24px'}} />
                
                <div className='container'>
                    <div id='pokemonlist' className='col'>
                        <PokemonList pokemon={API.Pokemons}/>
                    </div>
                </div>
            </>
        )
    }
}
