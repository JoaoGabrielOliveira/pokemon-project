    json.search do
        unless @queryPokemons.nil?
            json.pokemons @queryPokemons.each do |pokemon|
                json.id pokemon.id
                json.name pokemon.name
                json.avatar pokemon.avatar
            end
        end

        unless @queryTypes.nil?
            json.types @queryTypes.each do |type|
                json.id type.id
                json.name type.name
                json.color type.color
            end
        end
    end