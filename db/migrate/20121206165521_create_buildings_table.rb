class CreateBuildingsTable < ActiveRecord::Migration
  def change
    create_table :buildings do |t|
      t.integer :zip
      t.float :lat
      t.float :long
      t.integer :kwh
      t.timestamps
    end
  end
end
