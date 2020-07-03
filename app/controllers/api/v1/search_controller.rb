class Api::V1::SearchController < ApplicationController
    def index

        if params[:filter] == 'pokemon' || params[:filter] == 'p'
            @queryPokemons = Pokemon.where('name LIKE ?', "#{params[:q]}%")

        elsif params[:filter] == 'type' || params[:filter] == 't'
            @queryTypes = PokemonType.where('name LIKE ?', "#{params[:q]}%")
        end
            
        if params[:show] == 'pokemon' || params[:show] == 'p'
            @queryPokemons = Pokemon.order(:id).where('name LIKE ?', "#{params[:q]}%")
        
        elsif params[:show] == 'type' || params[:show] == 't'
            @queryTypes = PokemonType.where('name LIKE ?', "#{params[:q]}%")

        elsif params[:bytype].to_i > 0
            pokemon_ids = PokemonToType.order(:pokemon_id).where('pokemon_type_1 = ? or pokemon_type_2 = ?', "#{params[:bytype].to_i}", "#{params[:bytyoe].to_i}").map(& :pokemon_id)
            @queryPokemons = []

            pokemon_ids.each do |id|
                @queryPokemons.push(Pokemon.find(id))
            end
            
            @queryPokemons.sort_by {|e| e[params[:name]]}

        elsif params[:byegg].to_i > 0
            pokemon_ids = PokemonToEggGroup.order(:pokemon_id).where('egg_group_id = ?', "#{params[:byegg].to_i}").map(& :pokemon_id)
            @queryPokemons = []

            pokemon_ids.each do |id|
                @queryPokemons.push(Pokemon.find(id))
            end

            @queryPokemons.sort_by {|e| e[:name]}
        else
            @queryTypes = PokemonType.where('name LIKE ?', "#{params[:q]}%")
            @queryPokemons = Pokemon.where('name LIKE ?', "#{params[:q]}%")
        end
    end
end