class CreateEggGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :egg_groups do |t|
      t.string :name, :null => false

      t.timestamps
    end
  end
end
