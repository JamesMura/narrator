# frozen_string_literal: true

module Types
  class BookType < Types::BaseObject
    field :id, ID, null: false
    field :title, String
    field :author, Types::AuthorType, null: false
    field :narrator, Types::NarratorType, null: false
    field :edition, String
    field :description, String
    field :published, GraphQL::Types::ISO8601Date
    field :identifiers, [Types::BookIdentifierType]
    field :top_reviews, [Types::ReviewType]
    
    def identifiers
        object.book_identifiers
    end

    def top_reviews
      object.reviews
  end
  end
end
