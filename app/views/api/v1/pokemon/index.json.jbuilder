json.pokemons @pokemons.each do |a|
    json.id a.id
    json.name a.name
    json.avatar a.avatar
end