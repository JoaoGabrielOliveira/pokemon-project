class PokemonToEggGroup < ApplicationRecord
  belongs_to :pokemon
  belongs_to :egg_group
end
