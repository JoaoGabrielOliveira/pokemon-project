if @pokemon.blank?
    json.msg 'ID não encontrado'

else
    json.id @pokemon.id
    json.name @pokemon.name
    json.weight @pokemon.weight
    json.height @pokemon.height
    json.types @types
    json.avatar @pokemon.avatar
end