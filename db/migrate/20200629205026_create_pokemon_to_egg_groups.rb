class CreatePokemonToEggGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemon_to_egg_groups do |t|
      t.references :pokemon, null: false, foreign_key: true
      t.references :egg_group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
