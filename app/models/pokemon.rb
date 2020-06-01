class Pokemon < ApplicationRecord
    belongs_to :pokemon_type, polymorphic: true
end