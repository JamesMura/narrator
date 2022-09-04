module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :books, [BookType]
    field :authros, [AuthorType]
    field :narrators, [NarratorType]
    def books
      Book.all
    end
    def authors
      Author.all
    end
    def narrators
      Narrator.all
    end
  end
end
