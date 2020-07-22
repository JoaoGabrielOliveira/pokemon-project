class PokemonType < ApplicationRecord
    has_many :pokemon_to_types, class_name: "pokemon_to_type"
end