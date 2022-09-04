class CreateBookIdentifiers < ActiveRecord::Migration[7.0]
  def change
    create_table :book_identifiers do |t|
      t.references :book, null: false, foreign_key: true
      t.string :id_type
      t.text :value

      t.timestamps
    end
  end
end
