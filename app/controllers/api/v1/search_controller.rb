class Api::V1::SearchController < ApplicationController
    def index

        if params[:show] == 'pokemon' || params[:show] == 'p'
            @queryPokemons = Pokemon.order(:name).where('name LIKE ?', "#{params[:q]}%")

        elsif params[:show] == 'type' || params[:show] == 't'
            @queryTypes = PokemonType.where('name LIKE ?', "#{params[:q]}%")

        else
            @queryTypes = PokemonType.where('name LIKE ?', "#{params[:q]}%")
            @queryPokemons = Pokemon.where('name LIKE ?', "#{params[:q]}%")
        end
        

        
    end
end
