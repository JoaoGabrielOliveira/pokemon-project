if @pokemon.blank?
    json.msg 'ID não encontrado'

elsif params[:gif] != nil
    json.id @pokemon.id
    json.modernAvatar @modernAvatar
    json.classicAvatar @classicAvatar

else
    json.id @pokemon.id
    json.name @pokemon.name
    json.weight @pokemon.weight
    json.height @pokemon.height
    json.types @types.each do |type|
        json.id type.id
        json.name type.name
        json.color type.color
    end
    json.avatar @pokemon.avatar

    json.capture_rate @pokemon.capture_rate
    json.gender_rate @pokemon.gender_rate

    json.egg_group @egg_group.each do |egg|
        json.id egg.id
        json.name egg.name
    end
end