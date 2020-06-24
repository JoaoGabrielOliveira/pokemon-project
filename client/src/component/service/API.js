import Axios from 'axios'


export default class API {
    
    static URL = `http://localhost:3001/api/v1`;

    static async getAllPokemons(options = '')
    {
        const res = await Axios.get(this.URL + '/pokemon' + '?' + options)
        
        console.log(res.data.pokemons);
        return(res.data.pokemons);
    }

    static async getPokemon(id)
    {
        const res = await Axios.get(this.URL + '/pokemon/' + id)

        console.log(' ----------------- Dados carregados com sucesso! -----------------');
        return(res.data);
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