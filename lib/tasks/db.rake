namespace :db do
  namespace :populate do
    desc "Pegando Pokemons da API PokeAPI e adicionando a tabela Pokemon"
    task pokemon: :environment do
      
      spinners = TTY::Spinner::Multi.new("Populando tabela Pokemons OBS: Isso pode demorar alguns segundos")

      sp1 = spinners.register "[:spinner] Pegando Pokemons da PokeAPI"
      sp2 = spinners.register "[:spinner] Populando array com Pokemons da PokeAPI"
      sp3 = spinners.register "[:spinner] Inserindo no Banco de Dados os pokemons do Array"
      sp1.auto_spin
      
      especies = PokeApi.get(generation: '1').pokemon_species.map(& :name)
      sp1.success

      pokemons = []
      
      especies.each do |esp|
        types = []
        po = PokeApi.get(pokemon: esp)

        po.types.each do |t|
          t = PokemonType.find_by!(name: t.type.name)
          types.push(id:t.id)
        end
        p = { id: po.order, name: po.name, weight: po.weight, height: po.height, avatar: po.sprites.front_default, pokemon_type: types }
        pokemons.push(p)
        sp2.spin
      end

      sp2.success

      pokemons.each do |pokemon|
        p = Pokemon.find_or_create_by!(pokemon)
        sp3.spin
      end

      sp3.success
      
		end
		
		desc "Pegar todos os Tipos de Pokemon da PokeAPI e adicionar a tabela Types"
		task types: :environment do
			spinners = TTY::Spinner::Multi.new("Populando tabela Pokemons OBS: Isso pode demorar alguns segundos")

      sp1 = spinners.register "[:spinner] Pegando Tipos da PokeAPI"
      sp2 = spinners.register "[:spinner] Populando array com Tipos da PokeAPI"
      sp3 = spinners.register "[:spinner] Inserindo no Banco de Dados os Tipos do array"

      sp1.auto_spin
      unless PokemonType.any?

        types_names = PokeApi.get(generation: '1').types


        types = []
        sp1.success
        types_names.each do |t|
          type_api = PokeApi.get(type: t.name)
          
          type = { id:type_api.id, name:type_api.name }
          
          types.push(type)
          sp2.spin
        end

        sp2.success


        types.each do |type|
          PokemonType.find_or_create_by!(type)
          sp3.spin
        end
      end

      sp1.success
      sp2.success

      type = PokeApi.get(type: 18)
      PokemonType.find_or_create_by!({id: type.id,name: type.name})

      type = PokeApi.get(type: 9)
      PokemonType.find_or_create_by!({id: type.id,name: type.name})

      sp3.success
    end

	end
end