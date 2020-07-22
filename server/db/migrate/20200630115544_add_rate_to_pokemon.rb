class AddRateToPokemon < ActiveRecord::Migration[6.0]
  def change
    add_column :pokemons, :capture_rate, :float
    add_column :pokemons, :gender_rate, :float
    add_column :pokemons, :hatch_counter, :int
  end
end
