class Api::V1::SearchController < ApplicationController
    def index            
        if params[:show] == 'pokemon' || params[:show] == 'p'
            @queryPokemons = Pokemon.order(:id).where('name LIKE ?', "#{params[:q]}%")
        
        elsif params[:show] == 'type' || params[:show] == 't'
            @queryTypes = PokemonType.where('name LIKE ?', "#{params[:q]}%")

        else
            @queryTypes = PokemonType.where('name LIKE ?', "#{params[:q]}%")
            @queryPokemons = Pokemon.where('name LIKE ?', "#{params[:q]}%")
        end


        if params[:bytype].to_i > 0
             pokemon_ids = PokemonToType.order(:pokemon_id).where('pokemon_type_1 = ? or pokemon_type_2 = ?', params[:bytype].to_i,params[:bytype].to_i).map(& :pokemon_id)

            pokemons = []
            @queryPokemons.each do |pokemon|
                pokemon_ids.each do |pokemon_id|
                    if pokemon.id == pokemon_id
                        pokemons.push(pokemon)
                    end
                end
            end
            
            @queryPokemons = pokemons
        end

        if params[:byegg].to_i > 0
            pokemon_ids = PokemonToEggGroup.order(:pokemon_id).where('egg_group_id = ?', "#{params[:byegg].to_i}").map(& :pokemon_id)
            pokemons = []
            @queryPokemons.each do |pokemon|
                pokemon_ids.each do |pokemon_id|
                    if pokemon.id == pokemon_id
                        pokemons.push(pokemon)
                    end
                end
            end

            @queryPokemons = pokemons
        end
    end
end