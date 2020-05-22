class Api::V1::PokemonController < ApplicationController
    def index
        if params[:offset].to_i > 0
            @pokemons = Pokemon.all.drop(params[:offset].to_i)
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
        rescue => exception
        end
    end
end