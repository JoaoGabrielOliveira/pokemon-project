class Api::V1::SearchController < ApplicationController
    def index   
        @queryPokemons = Pokemon.where('name LIKE ?', "#{params[:q].downcase}%")
        

        unless params[:bytype].nil?

            pokemon_ids = []
            paramento = nil

            if params[:bytype][0] == "["
                parametro = JSON.parse(params[:bytype])
                
                parametro.each do |param|
                    pokemon_ids = (pokemon_ids + PokemonToType.order(:pokemon_id).where("pokemon_type_1 = ? or pokemon_type_2 = ?", param, param).map(& :pokemon_id) ).uniq
                end
            else
                parametro = [ params[:bytype].to_i, params[:bytype].to_i ]
                pokemon_ids = PokemonToType.order(:pokemon_id).where("pokemon_type_1 = ? or pokemon_type_2 = ?", parametro[0], parametro[1]).map(& :pokemon_id)
            end

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
            pokemon_ids = PokemonToEggGroup.order(:pokemon_id).where('egg_group_id = ?',params[:byegg].to_i).map(& :pokemon_id)
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

        unless params[:order] == nil || params[:order] == ''
            @queryPokemons = @queryPokemons.sort_by {|e| e[params[:order]]}
        end

    end
end