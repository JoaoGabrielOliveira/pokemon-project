import React from 'react'
import axios from 'axios'

import './index.css'

import Chip from '../outros/chip'

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
            <div id='Pesquisa'>
                <div className="float">
                        <div className='my-float'> <i class="material-icons">search</i> </div>
                </div>

                <div className='search-box'>
                    <input class="form-control" onChange={(e) => this.Pesquisar(e)} placeholder='Digite o nome do pokemon:' />
                    <a href='#'> [Mais opções] </a>
                    < hr/>
                </div>
            </div>
    )
    }
}