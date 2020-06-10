unless params[:q].nil?
    json.search do 
        json.pokemons @queryPokemons.each do |pokemon|
            json.id pokemon.id
            json.name pokemon.name
            json.avatar pokemon.avatar
        end

        json.types @queryTypes.each do |type|
            json.id type.id
            json.name type.name
            json.color type.color
        end
    end
else
    json.msg 'Não dado encontrado'
end