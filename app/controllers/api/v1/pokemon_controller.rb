class Api::V1::PokemonController < ApplicationController
    def index
        if params[:offset].to_i > 0
            @pokemons = Pokemon.all.drop(params[:offset].to_i) #.pluck(:id, :name, :)
        else 
            @pokemons = Pokemon.all
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

            ptot = PokemonToType.find(@pokemon.pokemon_to_types)
            
            @types = [PokemonType.find(ptot.pokemon_type_1)]

            unless ptot.pokemon_type_2.nil?
                @types.push(PokemonType.find(ptot.pokemon_type_2))
            end
            
        rescue => exception
        end
    end
end