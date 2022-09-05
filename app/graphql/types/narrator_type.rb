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

    field :avatar_url, String, null: true
    def avatar_url
      Rails.application.routes.url_helpers.rails_blob_url(object.avatar) if object.avatar.attached?
    end
  end
end
