    json.search do
        unless @queryPokemons.nil?
            json.pokemons @queryPokemons.each do |pokemon|
                json.id pokemon.id
                json.name pokemon.name
                json.avatar pokemon.avatar
            end
        end
    end