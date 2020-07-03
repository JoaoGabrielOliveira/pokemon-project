import Axios from 'axios';
import React from 'react'


export default class API {
    
    static URL = `http://localhost:3001/api/v1`;

    static Controller = ``;

    static Pokemons;

    static Options;

    static async getAllPokemons(options = '')
    {
        const res = await Axios.get(this.URL + '/pokemon' + '?' + options);

        this.Pokemons = res.data.pokemons;
        
        console.log(this.Pokemons);
        
        return(this.Pokemons);
    }

    static async getPokemon(id)
    {
        const res = await Axios.get(this.URL + '/pokemon/' + id)

        console.log(' ----------------- Dados carregados com sucesso! -----------------');
        return(res.data);
    }

    static async SeachPokemon(event)
    {
        this.Controller = `/search`;
        let query = event.target.value.toLowerCase();
        let Seach = this.URL + this.Controller + '?q=' + query;
        
        if(this.Options == '')
        {
            this.Pokemons = undefined;
        }

        else
        {
            const res = await Axios.get(Seach);
            this.Pokemons = res.data.search.pokemons;
        }

        console.log(Seach);
        console.log(this.Pokemons);
    }
    
    static async getAllPokemonType(options = '')
    {
        const res = await Axios.get(this.URL + '/type' + '?' + options)
        
        console.log(res.data.types);
        return(res.data.types);
    }

    static async getPokemonType(id)
    {
        const res = await Axios.get(this.URL + '/type/' + id)

        console.log(res.data.type);
        return(res.data.type);
    }
}