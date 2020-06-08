if @pokemon.blank?
    json.msg 'ID não encontrado'

else
    json.id @pokemon.id
    json.name @pokemon.name
    json.weight @pokemon.weight
    json.height @pokemon.height
    json.types do
        json.slot1 do
            json.id @types[0].id
            json.name @types[0].name
            json.color @types[0].color
        end

        json.slot2 do
            json.id @types[1].id
            json.name @types[1].name
            json.color @types[1].color
        end
    end 

    json.avatar @pokemon.avatar
end

