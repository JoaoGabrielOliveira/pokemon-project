class PokemonType < ApplicationRecord
    has_many :pokemons, class_name: "pokemon", foreign_key: "type_id"
end
