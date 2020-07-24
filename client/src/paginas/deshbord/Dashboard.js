import React, { Component } from 'react';
import PokemonList from './PokemonList';

import Navbar from '../../component/NavBar';

import API from '../../service/API';



export default class Dashboard extends Component {

    render() {
        
        return (
            <>
            <Navbar text='Pokédex' image="https://img.icons8.com/officel/80/000000/pokedex.png" style={{padding:'24px'}} />
                
                <div className='container'>
                    <div id='pokemonlist' className='col' style={{marginBottom:"20px"}}>
                        <PokemonList pokemon={API.Pokemons}/>
                    </div>
                </div>
                
            </>
        )
    }
}
