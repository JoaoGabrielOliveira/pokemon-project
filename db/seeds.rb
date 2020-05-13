# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

joao = User.new
joao.first_name = 'João'
joao.last_name = 'G.'
joao.email = 'joao@gmail.com'
joao.date_of_birth = Date.new
joao.password = '123456'
joao.sex = 'm'

bruna = User.new
bruna.first_name = 'Bruna'
bruna.last_name = 'C.'
bruna.email = 'bruna@gmail.com'
bruna.date_of_birth = Date.new
bruna.password = '123456'
bruna.sex = 'f'