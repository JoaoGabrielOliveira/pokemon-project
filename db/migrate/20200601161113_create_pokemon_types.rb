class CreatePokemonTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemon_types do |t|
      t.string :name, null: false
      t.string :color, default:'#ededed'

      t.timestamps
    end
  end
end
