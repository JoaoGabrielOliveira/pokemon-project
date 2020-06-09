json.search_pokemon @queryNames.each do |pokemon|
    json.id pokemon.id
    json.name pokemon.name
    json.avatar pokemon.avatar
end

json.search_type @queryTypes.each do |pokemon|
    json.id pokemon.id
    json.name pokemon.name
end