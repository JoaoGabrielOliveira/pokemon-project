class CreatePokemonToTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemon_to_types do |t|
      t.references :pokemon, null: false, foreign_key: true
      t.integer :pokemon_type_1, null: false
      t.integer :pokemon_type_2

      t.timestamps
    end
  end
end
