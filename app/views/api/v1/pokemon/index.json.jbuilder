json.pokemons @pokemons.each do |a|
    json.id a.id
    json.name a.name
    json.weight a.weight
    json.height a.height
    json.avatar a.avatar
end