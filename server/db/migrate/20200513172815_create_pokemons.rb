class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name, null:false
      t.float :weight
      t.float :height
      t.string :avatar

      t.timestamps
    end
  end
end
