class AddTypeToPokemons < ActiveRecord::Migration[6.0]
  def change
    add_reference :pokemons, :types, null: false, foreign_key: true
  end
end
