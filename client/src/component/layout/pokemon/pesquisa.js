import React from 'react'
import API from '../../service/API'

import './index.css'

import Chip from '../outros/chip'

export default class Pesquisa extends React.Component{

    state={
        url:"http://localhost:3001/api/v1/search?q=",
        options:'',
    }

    render(){
        return (
            <div id='Pesquisa'>
                <div className="float">
                        <div className='my-float'> <i className="material-icons">search</i> </div>
                </div>

                <div className='search-box'>
                    <input className="form-control" onChange={(e) => API.SeachPokemon(e)} placeholder='Digite o nome do pokemon:' />
                    <a href='#'> [Mais opções] </a>
                    < hr/>
                </div>
            </div>
    )
    }
}