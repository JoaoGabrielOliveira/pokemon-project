class Api::V1::PokemonController < ApplicationController
    def index
        @pokemons = Pokemon.all
    end

    def show
        @pokemon = Pokemon.find(params[:id])
    end
end
