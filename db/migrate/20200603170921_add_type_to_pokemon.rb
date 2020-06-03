class AddTypeToPokemon < ActiveRecord::Migration[6.0]
  def change
    add_reference :pokemons, :pokemon_to_type, null: true, foreign_key: true
  end
end
