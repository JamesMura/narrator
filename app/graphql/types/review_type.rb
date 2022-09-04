# frozen_string_literal: true

module Types
  class ReviewType < Types::BaseObject
    field :id, ID, null: false
    field :user_id, Integer, null: false
    field :content, String
    field :story_rating, Float
    field :narrator_rating, Float
    field :book, BookType, null: false
  end
end
