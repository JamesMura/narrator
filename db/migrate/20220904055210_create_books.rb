class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.text :title
      t.references :author, null: false, foreign_key: true
      t.references :narrator, null: false, foreign_key: true
      t.string :edition
      t.text :description
      t.date :published

      t.timestamps
    end
  end
end
