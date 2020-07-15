namespace :db do

  desc "Resetando banco de dados, criando um novo e fazendo as migrações"
  task setup: :environment do
    puts '   - Rodando todas as Tasks de Banco de Dados -'
    puts '__ DELETANDO TODOS BANCOS DE DADOS __'
    %x[rails db:drop]

    puts '_______________'

    puts '__ CRIANDO TODOS BANCOS DE DADOS __'
    %x[rails db:create]

    puts '_______________'

    puts '__ EXECUTANDO MIGRAÇÕES PARA CRIAÇÃO DE TABELAS __'
    %x[rails db:migrate]

    puts '_______________'
  end

  desc "Realizando todas as Task para popular Pokemon, PokemonTypes e EggGroups"
  task populate: :environment do
    puts '   - Rodando todas as Tasks de População -'
    puts '__PokemonTypes'
    %x[rails db:populate:types]

    puts '_______________'

    puts '__EggGroups'
    %x[rails db:populate:egg]

    puts '_______________'

    puts 'Pokemon'
    %x[rails db:populate:pokemon]

    puts '_______________'
  end

  desc "Realizando todas as Task para popular Pokemon, PokemonTypes e EggGroups"
  task populate: :environment do [:types, :egg, :pokemon]

  end

  namespace :populate do
    desc "Pegando Pokemons da API PokeAPI e adicionando a tabela Pokemon"
    task pokemon: :environment do
      
      #Tempo médio de tempo para terminar de rodar essa task: 1min e 20seg
      spinners = TTY::Spinner::Multi.new("Populando tabela Pokemons OBS: Isso pode demorar alguns minutos")

      sp1 = spinners.register "[:spinner] Pegando Pokemons da PokeAPI"
      sp2 = spinners.register "[:spinner] Populando array com Pokemons da PokeAPI"
      sp3 = spinners.register "[:spinner] Inserindo Pokemons à tabela Pokemons"
      sp4 = spinners.register "[:spinner] Inserindo os Tipos de Pokemons à tabela PokemonToTypes"
      sp5 = spinners.register "[:spinner] Inserindo os Grupos de Ovos à tabela PokemonToEggGroups"
      sp6 = spinners.register "[:spinner] Adicionando e Atualizando informações de Pokemons"
      sp1.auto_spin
      
      especies = PokeApi.get(generation: '1').pokemon_species.map(& :name)
      sp1.success

      v_pokemons = []
      v_pokemons_to_type = []
      v_add_info = []

      if PokemonType.any? 
        %w(rails db:populate:types)
      end

      

      especies.each do |esp|
        po = PokeApi.get(pokemon: esp)
        pokeinfo = PokeApi.get(pokemon_species: esp)

        p = { id: po.order, name: po.name, weight: po.weight, height: po.height, avatar: po.sprites.front_default }

        ptot = nil

        if po.types[1] == nil
          ptot = { pokemon_id: po.order, pokemon_type_1: PokemonType.find_by(name: po.types[0].type.name).id, pokemon_type_2:nil }
        else
          ptot = { pokemon_id: po.order, pokemon_type_1:PokemonType.find_by(name: po.types[0].type.name).id, pokemon_type_2:PokemonType.find_by(name: po.types[1].type.name).id }
        end

        
        info = []
        pokeinfo.egg_groups.each do |egg|
          info.push( { pokemon_id: po.order, egg_group_id: EggGroup.find_by(name: egg.name).id} )
        end
        
        v_pokemons.push(p)
        v_pokemons_to_type.push(ptot)
        v_add_info.push( { id:po.order , rate:{capture_rate: pokeinfo.capture_rate, gender_rate: pokeinfo.gender_rate, hatch_counter: pokeinfo.hatch_counter}, egg_group: info })
        sp2.spin
      end

      sp2.success

      v_pokemons.each do |pokemon|
        p = Pokemon.find_or_create_by!(pokemon)
        sp3.spin
      end
        sp3.success

      v_pokemons_to_type.each do |pokemon|
        p = PokemonToType.find_or_create_by!(pokemon)

        pok = Pokemon.find(pokemon[:pokemon_id])

        pok.pokemon_to_type = p.id
        pok.save!
        sp4.spin
      end

      sp4.success

      v_add_info.each do |info|
        info[:egg_group].each do |pteg|
          PokemonToEggGroup.find_or_create_by!(pteg)
        end
        sp5.spin

        Pokemon.update(info[:id], info[:rate])
        sp6.spin
      end

      sp5.success
      sp6.success
		end
		
		desc "Pegar todos os Tipos de Pokemon da PokeAPI e adicionar a tabela pokemon_types"
		task types: :environment do
			spinners = TTY::Spinner::Multi.new("Populando tabela PokemonTypes")

      sp1 = spinners.register "[:spinner] Pegando Tipos da PokeAPI"
      sp2 = spinners.register "[:spinner] Populando array com Tipos da PokeAPI"
      sp3 = spinners.register "[:spinner] Inserindo no Banco de Dados os Tipos do array"
      sp4 = spinners.register "[:spinner] Atualizando cores de cada Tipos"

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

      sp4.auto_spin
      `rails db:populate:types:color`
      sp4.success

    end

    namespace :types do
      desc "Alterar color dos PokemonType para suas respectivas cores"
      task color: :environment do
        #region
        if PokemonType.any?
          TYPE_COLORS = [
            {name:"bug", color:'B1C12E'},
            {name:"dragon", color:'755EDF'},
            {name:"electric", color:'FCBC17'},
            {name:"fairy", color:'F4B1F4'},
            {name:"fighting", color:'82351D'},
            {name:"fire", color:'E73B0C'},
            {name:"flying", color:'A3B3F7'},
            {name:"ghost", color:'6060B2'},
            {name:"grass", color:'74C236'},
            {name:"ground", color:'D3B357'},
            {name:"ice", color:'A3E7FD'},
            {name:"normal", color:'C8C4BC'},
            {name:'poison', color:'934594'},
            {name:"psychic", color:'ED4882'},
            {name:"rock", color:'B9A156'},
            {name:"steel", color:'B5B5C3'},
            {name:"water", color:'3295F6'}
          ]

          TYPE_COLORS.each do |type|
            poke = PokemonType.find_by(name: type[:name])
            
            if poke.nil?
              puts 'Nulo'
            end

            poke.update_attribute(:color, type[:color])
          end

          puts '└── [*] Cores estão atualizadas com sucesso!'

        else
          puts '[*] PokemonType está vazia!'
          puts '[*] Rode primeiro o comando | rails db:populate:types |'
        end
        #endregion
      end 
    end

    desc "Pegar todos os Tipos de Grupos de Ovos da PokeAPI e adicionar a tabela egg_groups"
    task egg: :environment do
      spinners = TTY::Spinner::Multi.new("Populando tabela EggGroups")

      sp1 = spinners.register "[:spinner] Pegando Grupos de Ovos da PokeAPI"
      sp2 = spinners.register "[:spinner] Adicionando a tabela egg_groups"

      sp1.auto_spin
      all_eggs = PokeApi.get(:egg_group).results
      sp1.success

      all_eggs.each do |egg|
        var = EggGroup.find_or_create_by!(name: egg.name)
        sp2.spin
      end
        sp2.success
      spinners.success
      puts '    Processo realizado com sucesso!'
    end

	end
end