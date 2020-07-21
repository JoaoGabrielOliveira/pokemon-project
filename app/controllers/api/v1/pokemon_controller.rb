class Api::V1::PokemonController < ApplicationController
    include ApplicationHelper
    def index
        if params[:offset].to_i > 0
            @pokemons = Pokemon.all.drop(params[:offset].to_i) #.pluck(:id, :name, :)
        else 
            @pokemons = Pokemon.all
        end

        

        if params[:limit].to_i > 0
            @pokemons = @pokemons.take(params[:limit].to_i)
        end

        unless params[:order].nil?
            @pokemons = @pokemons.sort_by {|e| e[params[:order]]}
        end

        unless params[:gif].nil?
            @pokemons.each do |pokemon|
                if pokemon.name.index("-")
                    if pokemon.id == 55
                        pokemon.name = "Nidoran_Male"
                    elsif pokemon.id == 58
                        pokemon.name = "Nidoran_Female"
                    
                    else
                        pokemon.name = add_space_name(pokemon.name, '._')
                    end
                
                elsif pokemon.id == 127
                    pokemon.name = %Q[Farfetch'd]

                else
                    pokemon.name = pokemon.name.capitalize()
                end
                
                url = "https://raw.githubusercontent.com/figormartins/pokemon/master/PokeApi/static/#{pokemon.name}.gif"
                pokemon.avatar = url
            end
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

            @pokemon.name = @pokemon.name.capitalize

            unless params[:gif].nil?
                
                    if @pokemon.name.index("-")
                        if @pokemon.id == 55
                            @pokemon.name = "Nidoran_Male"
                        elsif @pokemon.id == 58
                            @pokemon.name = "Nidoran_Female"
                        else
                            @pokemon.name = add_space_name(@pokemon.name, '._')
                        end               
                    

                    elsif @pokemon.id == 127
                        @pokemon.name = %Q[Farfetch'd]
                    end
                    
    
                    @modernAvatar = "https://raw.githubusercontent.com/figormartins/pokemon/master/PokeApi/static/#{@pokemon.name}.gif"
                    @classicAvatar = @pokemon.avatar
            end
            
        rescue => exception
        end
    end
end