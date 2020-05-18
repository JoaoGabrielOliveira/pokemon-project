if @pokemon.blank?
    json.message 'ID não encontrado'

else
    json.id @pokemon.id
    json.name @pokemon.name
    json.weight @pokemon.weight
    json.height @pokemon.height
    json.avatar @pokemon.avatar
end

