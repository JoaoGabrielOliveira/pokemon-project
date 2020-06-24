import React, { Component } from 'react';

import PokemonList from '../layout/pokemon/PokemonList';

export default class Dashboard extends Component {
    render() {
        return (
            <>
            <div className='container'>
                <div className="row">
                    <div className='col'>
                    <PokemonList />
                    </div>
                </div>
            </div>
            </>
        )
    }
}
