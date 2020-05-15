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