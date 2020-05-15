# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

joao = {
:first_name => 'João',
:last_name => 'G.',
:email => 'joao@gmail.com',
:date_of_birth => Date.new,
:password => '123456',
:sex => 'm'
}

bruna = {
:first_name => 'Bruna',
:last_name => 'C.',
:email => 'bruna@gmail.com',
:date_of_birth => Date.new,
:password => '123456',
:sex => 'f'
}

j = User.new(joao)
b = User.new(bruna)



#Populando Pokemons
pokemons = []

# Recebe todas as Especies de Pokemon da Geração (RETORNA: Array)
especies = PokeApi.get(generation: '1').pokemon_species

especies.each do |esp|
    po = PokeApi.get(pokemon: esp.name)
    p = { id: po.order, name: po.name, weight: po.weight, height: po.height, avatar: po.sprites.front_default }
    pokemons.push(p)
end

pokemons.each do |pokemon|
    Pokemon.find_or_create_by!(pokemon)
end