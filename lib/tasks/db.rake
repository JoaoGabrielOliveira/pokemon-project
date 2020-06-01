namespace :db do
  namespace :populate do
    desc "Pegando Pokemons da API PokeAPI e adicionando a tabela Pokemon"
    task pokemon: :environment do
      
      spinners = TTY::Spinner::Multi.new("[:spinner] Populando tabela Pokemons OBS: Isso pode demorar alguns segundos")

      sp1 = spinners.register "[:spinner] Pegando Pokemons da PokeAPI"
      sp2 = spinners.register "[:spinner] Populando array com Pokemons da PokeAPI"
      sp3 = spinners.register "[:spinner] Inserindo no Banco de Dados os pokemons do Array"
      sp1.auto_spin
      
      

      # Recebe todas as Especies de Pokemon da Geração (RETORNA: Array)
      especies = PokeApi.get(generation: '1').pokemon_species
      sp1.success

      pokemons = []

      especies.each do |esp|
        po = PokeApi.get(pokemon: esp.name)
        p = { id: po.order, name: po.name, weight: po.weight, height: po.height, avatar: po.sprites.front_default }
        pokemons.push(p)
        sp2.spin
      end

      sp2.success


      pokemons.each do |pokemon|
        Pokemon.find_or_create_by!(pokemon)
        sp3.spin
      end

      sp3.success
      
		end
		
		desc "Pegar todos os Tipos de Pokemon da PokeAPI e adicionar a tabela Types"
		task types: :environment do
			spinners = TTY::Spinner::Multi.new("[:spinner] Populando tabela Pokemons OBS: Isso pode demorar alguns segundos")

      sp1 = spinners.register "[:spinner] Pegando Tipos da PokeAPI"
      sp2 = spinners.register "[:spinner] Populando array com Tipos da PokeAPI"
      sp3 = spinners.register "[:spinner] Inserindo no Banco de Dados os Tipos do array"
      
      types_names = PokeApi.get(generation: '1').types
      sp1.success

      types = []

      types_names.each do |t|
				type_api = PokeApi.get(type: t.name)
				
				type = { id:type_api.id, name:type_api.name }
				
        types.push(type)
        sp2.spin
      end

      sp2.success


      types.each do |type|
        Type.find_or_create_by!(type)
        sp3.spin
      end

      sp3.success
    end

	end
end