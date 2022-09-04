# frozen_string_literal: true

module Types
  class NarratorType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :bio, String
    field :books, [Types::BookType]

    def books
      object.books
    end
  end
end
