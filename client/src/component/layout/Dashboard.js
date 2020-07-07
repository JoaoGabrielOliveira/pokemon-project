import React, { Component } from 'react';
import '/home/bionexo/projetoaprendizes/client/src/App.css'
import PokemonList from '../layout/pokemon/PokemonList';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='body'>
            <div className='container'>
                <div className="row">
                    <div className='col'>
                    <PokemonList />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
