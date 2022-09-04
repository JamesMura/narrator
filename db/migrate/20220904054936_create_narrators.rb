# frozen_string_literal: true

class CreateNarrators < ActiveRecord::Migration[7.0]
  def change
    create_table :narrators do |t|
      t.string :name
      t.text :bio

      t.timestamps
    end
  end
end
