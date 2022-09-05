# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :featured_books, [BookType] do
      argument :count, Integer, required: false, default_value: 3
    end
    field :book, BookType do
      argument :id, Integer, required: true
    end
    field :books, [BookType]
    field :authors, [AuthorType]
    field :narrators, [NarratorType]
    def featured_books(count:)
      Book.first(count)
    end

    def books
      Book.all
    end

    def book(id:)
      Book.find(id)
    end

    def authors
      Author.all
    end

    def narrators
      Narrator.all
    end
  end
end
