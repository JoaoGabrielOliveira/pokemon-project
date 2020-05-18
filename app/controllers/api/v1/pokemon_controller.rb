class Api::V1::PokemonController < ApplicationController
    def index
        if (params[:limit].to_i > 0)
            @pokemons = Pokemon.take(params[:limit].to_i)
        else 
            @pokemons = Pokemon.all
        end
    end

    def show
        begin
            @pokemon = Pokemon.find(params[:id])    
        rescue => exception
        end
    end
end