if @type.blank?
    json.message 'ID não encontrado'

else
    json.id @type.id
    json.name @type.name
    json.color @type.color
end
