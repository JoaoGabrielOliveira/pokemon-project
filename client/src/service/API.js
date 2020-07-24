import Axios from 'axios';

export default class API {
    
    static URL = `http://localhost:3001/api/v1`;

    static NewsURL = `http://newsapi.org/v2/everything?q=pokemon&language=pt`;

    static Pokemons;

    static async getAllPokemons(options = '')
    {
        const res = await Axios.get(API.URL + `/pokemon?` + options);

        this.Pokemons = res.data.pokemons;
        
        console.info('Retornando todos os Pokemons do Banco de Dados',API.Pokemons);
        
        return(this.Pokemons);
    }

    static async getPokemon(id, option = '')
    {
        const res = await Axios.get(this.URL + '/pokemon/' + id + option)

        console.log(' ----------------- Dados carregados com sucesso! -----------------');
        return(res.data);
    }

    static async SeachPokemon(value = '', options)
    {
        this.Controller = `/search`;
        let query = value.toLowerCase();
        let Seach = this.URL + this.Controller + '?q=' + query + '&' + options;
        
        const res = await Axios.get(Seach);
        this.Pokemons = res.data.search.pokemons;
        

        console.log(Seach);
        console.log(this.Pokemons);

        return res.data.search.pokemons;
    }
    
    static async getAllPokemonType(options = '')
    {
        const res = await Axios.get(this.URL + '/types' + '?' + options)
        
        console.info('Retornando todos os Tipos de Pokemons do Banco de Dados:',res.data.types);
        return(res.data.types);
    }

    static async getPokemonType(id)
    {
        //home/bionexo/Documents/projetoaprendizes/app/controllers/api/v1/search_controller.rb
        const res = await Axios.get(this.URL + '/types/' + id)

        console.log(res.data.type);
        return(res.data.type);
    }

    static async getNews(n)
    {
        const APIKEY = `&apikey=58bad1fa579a4bf48ec3024d9afcc270`;

        const res = await Axios.get(this.NewsURL + APIKEY)

        return res.data.articles.slice(0, n);
    }
}