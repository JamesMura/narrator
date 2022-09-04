# frozen_string_literal: true

class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.text :content
      t.decimal :story_rating
      t.decimal :narrator_rating
      t.references :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
