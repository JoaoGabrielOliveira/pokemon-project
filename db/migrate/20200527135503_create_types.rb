class CreateTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :types do |t|
      t.string :name
      t.string :color, :limit => 7, :default => "#"

      t.timestamps
    end
  end
end
