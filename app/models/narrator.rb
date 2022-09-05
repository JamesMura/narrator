# frozen_string_literal: true

class Narrator < ApplicationRecord
  has_many :books
  has_one_attached :avatar
end
