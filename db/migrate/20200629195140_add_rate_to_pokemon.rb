class AddRateToPokemon < ActiveRecord::Migration[6.0]
  def change
    add_column :pokemons, :capture_rate, :float, null: true
    add_column :pokemons, :gender_rate, :float, null: true
  end
end
