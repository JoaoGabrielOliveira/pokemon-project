import React from 'react'
import axios from 'axios'

import PokemonCard from './PokemonCard'
import 'bootstrap/dist/css/bootstrap.css';

export default class Pesquisa extends React.Component{

    async Pesquisar(event)
    {
        await this.setState({options: event.target.value.toLowerCase()});

        if(this.state.options == '')
        {
            this.setState({pokemon:undefined});
        }

        else
        {
            const res = await axios.get(this.state.url + this.state.options);
            this.setState({pokemon:res.data.search.pokemons});
        }

        //console.warn(res.data.search.pokemons);
        console.log(this.state.pokemon);
        console.log(this.state.options);
    }

    state={
        url:"http://localhost:3001/api/v1/search?q=",
        options:'',
        pokemon: null
    }

    render(){
        return (
            <div className='container'>
                <a className="btn-floating btn-lg btn-default"><i className="fas fa-bolt"></i></a>

                <input onChange={(e) => this.Pesquisar(e)} placeholder='Digite o nome do pokemon:'/>
 
                <div id='pokemon-list'>
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
                </div>):( <h1 style={{justifyContent:'center',alignItems:'center',display:'flex',minHeight:'80vh', textTransform:'uppercase'}}> Digite algo no campo de pesquisa</h1>)}
            </div>
            </div>
    )
    }
}