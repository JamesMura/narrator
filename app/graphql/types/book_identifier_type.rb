# frozen_string_literal: true

module Types
  class BookIdentifierType < Types::BaseObject
    field :id, ID, null: false
    field :book_id, Integer, null: false
    field :id_type, String
    field :value, String
  end
end
