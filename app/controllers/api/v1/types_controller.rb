class Api::V1::TypesController < ApplicationController
  def index
    @types = PokemonType.all 
  end
end
