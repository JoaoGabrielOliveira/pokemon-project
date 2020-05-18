json.search @queryNames.each do |pokemon|
    json.id pokemon.id
    json.name pokemon.name
    json.avatar pokemon.avatar
end