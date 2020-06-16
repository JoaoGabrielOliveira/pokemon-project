class AddTypeToPokemon < ActiveRecord::Migration[6.0]
  def change
    add_column :pokemons, :pokemon_to_type, :integer
  end
end
