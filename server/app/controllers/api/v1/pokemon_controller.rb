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

            ptot = PokemonToType.find(@pokemon.pokemon_to_type)
            
            @types = [ PokemonType.find(ptot.pokemon_type_1) ]

            @egg_group = []
            group = PokemonToEggGroup.where("pokemon_id = #{@pokemon.id}")
            group.each do |egg|
                 @egg_group.push(egg.egg_group) 
            end
            
        rescue => exception
        end
    end
end