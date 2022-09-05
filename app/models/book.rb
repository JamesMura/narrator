# frozen_string_literal: true

class Book < ApplicationRecord
  belongs_to :author
  belongs_to :narrator
  has_many :book_identifiers
  has_many :reviews
  has_one_attached :avatar
end
