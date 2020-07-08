import Axios from 'axios';
import React from 'react'


export default class API {
    
    static URL = `http://localhost:3001/api/v1`;

    static Controller = ``;

    static Pokemons;

    static async getAllPokemons(options = '')
    {
        const res = await Axios.get(this.URL + '/pokemon' + '?' + options);

        this.Pokemons = res.data.pokemons;
        
        console.info('Retornando todos os Pokemons do Banco de Dados',this.Pokemons);
        
        return(this.Pokemons);
    }

    static async getPokemon(id)
    {
        const res = await Axios.get(this.URL + '/pokemon/' + id)

        console.log(' ----------------- Dados carregados com sucesso! -----------------');
        return(res.data);
    }

    static async SeachPokemon(value, options)
    {
        this.Controller = `/search`;
        let query = value.toLowerCase();
        let Seach = this.URL + this.Controller + '?q=' + query + '&' + options;
        
        const res = await Axios.get(Seach);
        this.Pokemons = res.data.search.pokemons;

        console.log(Seach);
        console.log(this.Pokemons);
    }
    
    static async getAllPokemonType(options = '')
    {
        const res = await Axios.get(this.URL + '/types' + '?' + options)
        
        console.info('Retornando todos os Tipos de Pokemons do Banco de Dados:',res.data.types);
        return(res.data.types);
    }

    static async getPokemonType(id)
    {
        const res = await Axios.get(this.URL + '/types/' + id)

        console.log(res.data.type);
        return(res.data.type);
    }
}