class Api::V1::SearchController < ApplicationController
    def index

        if params[:show] == 'pokemon' || params[:show] == 'p'
            @queryPokemons = Pokemon.order(:name).where('name LIKE ?', "#{params[:q]}%")

        elsif params[:show] == 'type' || params[:show] == 't'
            @queryTypes = PokemonType.where('name LIKE ?', "#{params[:q]}%")

        elsif params[:bytype].to_i > 0
            pokemon_ids = PokemonToType.where('pokemon_type_1 = ? or pokemon_type_2 = ?', "#{params[:bytype].to_i}", "#{params[:bytyoe].to_i}").map(& :pokemon_id)
            @queryPokemons = []

            pokemon_ids.each do |id|
                @queryPokemons.push(Pokemon.find(id))
            end

        else
            @queryTypes = PokemonType.where('name LIKE ?', "#{params[:q]}%")
            @queryPokemons = Pokemon.where('name LIKE ?', "#{params[:q]}%")
        end
    end
end
