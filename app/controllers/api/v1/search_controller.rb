class Api::V1::SearchController < ApplicationController
    def index

        if params[:filter] == 'pokemon' || params[:filter] == 'p'
            @queryPokemons = Pokemon.where('name LIKE ?', "#{params[:q]}%")

        elsif params[:filter] == 'type' || params[:filter] == 't'
            @queryTypes = PokemonType.where('name LIKE ?', "#{params[:q]}%")

        else
            @queryTypes = PokemonType.where('name LIKE ?', "#{params[:q]}%")
            @queryPokemons = Pokemon.where('name LIKE ?', "#{params[:q]}%")
        end
        

        
    end
end
