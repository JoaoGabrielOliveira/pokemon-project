import React, { Component, Fragment, useEffect, useState } from 'react';

import PokemonCard from '../../component/pokemonCard/PokemonCard';
import Chip from '../../component/chip';
import './PokemonList.css';


import API from '../../service/API';

export default class PokemonList extends Component {

    state={
        pokemon:null,
        types:null,
        seletedTypes:[],
        pesquisa:false
    } 

    timer = null;

    async Pesquisar(queryText)
    {
        var OPTIONS = '';

        if(this.state.seletedTypes.length == 0)
        {
            this.Options = OPTIONS;
        }
        
        else if (this.state.seletedTypes.length < 2 && this.state.seletedTypes[0] != undefined)
        {
            OPTIONS = '&bytype=' + this.state.seletedTypes[0].id;
        }
        
        else
        {
            console.info('Quantidades de elementos Selecionados:',this.state.seletedTypes.length);
            
            let ops = [];

            this.state.seletedTypes.map(type => {
                ops.push(type.id);
            });

            OPTIONS ="&bytype=["+ops.join()+"]";
        }

        clearTimeout(this.timer);

        this.timer = setTimeout(() => API.SeachPokemon(queryText, OPTIONS).then(E => this.setState({pokemon:E})),500);
    }
    
    async componentDidMount()
    {
        const res = await API.getAllPokemons('order=id');
        const pokemontypes = await API.getAllPokemonType('order=name');

        this.setState({pokemon:res});
        this.setState({types:pokemontypes});
    }

    async btnChange()
    {
        if(this.state.pesquisa)
        {
            document.getElementById('Pesquisa').style.left = '-100%';
            document.getElementById('pokemonlist').style.marginLeft = '-3%';
            this.setState({pesquisa:false});

            await API.getAllPokemons('order=id');
            this.setState({pokemon:API.Pokemons});
        }

        else
        {
            document.getElementById('Pesquisa').style.left = '2%';
            document.getElementById('pokemonlist').style.marginLeft = '17%';
            this.setState({pesquisa:true});
        }
    }

    collapeseOptions(event)
    {
            document.getElementById('moreOptions').classList.toggle("show");
            if(event.target.textContent == "[Mais opções]")
                event.target.textContent = "[Menos opções]";
            else if (event.target.textContent == "[Menos opções]")
                event.target.textContent = "[Mais opções]";

    }

    AddOption(type, index)
    {
        let AllTypesSeleted = this.state.seletedTypes;
        let AllTypes = this.state.types;

        AllTypesSeleted.push(type);
        AllTypes.splice(index,1);

        this.setState({seletedTypes:AllTypesSeleted});
        this.setState({types:AllTypes});

        this.Pesquisar();
    }

    RemoveOption(index)
    {
        let AllTypesSeleted = this.state.seletedTypes;
        let AllTypes = this.state.types;

        AllTypes.push(AllTypesSeleted[index]);
        AllTypes = AllTypes.sort();
        AllTypesSeleted.splice(index, 1);

        this.setState({seletedTypes:AllTypesSeleted});
        this.setState({types:AllTypes});

        this.Pesquisar();
    }

    ListTypeSeleted()
    {              
        let pokemons = this.state.seletedTypes.map((type,index) => (
                <Chip key={type.id} id={type.id} name={type.name} color={type.color}>
                    <span className="closebtn" onClick={(e) => this.RemoveOption(index)}>&times;</span>
                </Chip>
            ));

        return(<><p><b>Tipo de Pokemon</b> selecionados:</p><div className='.flex-list'>{pokemons}</div></>);
    }
    
    render()
    {
        const styled = {
            padding: "10px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            minHeight:'50vh'
          };

        let pokemonIndex = 0;

        return (
            <>
            <Fragment>
            <div id='Pesquisa'>
                <div className="float">
                        <div className='my-float' onClick={() => this.btnChange()}> <i className="material-icons">search</i> </div>
                </div>

                <div className='search-box'>
                    <input id='input-search' className="form-control" onChange={e => { this.Pesquisar(e.target.value); } } placeholder='Digite o nome do pokemon:' />
                            <a id='maisop' href="#" role="button" onClick={(e)=>this.collapeseOptions(e)} value='1'>
                                [Mais opções]
                            </a>
                    < hr/>

                    <div className='collapse' id="moreOptions">                        
                        {this.state.seletedTypes.length > 0 &&
                            this.ListTypeSeleted()
                        }
                        <p>Selecionar <b>Tipo de Pokemon</b>:</p>
                        <div className='flex-list'>
                            {this.state.types ?
                            (
                                this.state.types.map((type,index) => (
                                    <span key={type.id} onClick={(e) => this.AddOption(type, index)} >
                                        <Chip id={type.id} name={type.name} color={type.color} />
                                    </span>
                                ))
                            )
                            :
                            (
                                <h1>Não há nada</h1>
                            )}
                            <hr />
                        </div>
                    </div>
                </div>

                
            </div>
                
                
            {this.state.pokemon ?
                (<div className="row">
                {this.state.pokemon.map(pokemon => {
                    pokemonIndex++;
                    return(<PokemonCard
                        key={pokemon.id}
                        index={pokemonIndex}
                        id={pokemon.id}
                        name={pokemon.name}
                        avatar={pokemon.avatar}
                        cor={pokemon.cor}
                   />)
                })}
            </div>):(<h1 style={styled}>Carregando lista...</h1>)}
            </Fragment>
            </>
        )
    }
}