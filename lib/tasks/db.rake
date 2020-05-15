namespace :db do
  namespace :populate do
    desc "Pegando Pokemons da API PokeAPI e adicionando a tabela Pokemon"
    task pokemon: :environment do
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
    end
  end  

end
