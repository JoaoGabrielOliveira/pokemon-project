class Api::V1::PokemonController < ApplicationController
    def index
        if params[:offset].to_i > 0
            @pokemons = Pokemon.includes(:pokemon_to_type).drop(params[:offset].to_i) #.pluck(:id, :name, :)
        else 
            @pokemons = Pokemon.includes(:pokemon_to_type)
        end


        if params[:limit].to_i > 0
            @pokemons = @pokemons.take(params[:limit].to_i)
        end

        if params[:order] != ''
            @pokemons = @pokemons.sort_by {|e| e[params[:order]]}
        end

    end

    def show
        begin
            @pokemon = Pokemon.find(params[:id])
            @types = [ PokemonType.find(@pokemon.pokemon_to_type.pokemon_type_1)]
            slot2 = PokemonType.find(@pokemon.pokemon_to_type.pokemon_type_2)
            @types.push(slot2)
        rescue => exception
        end
    end
end