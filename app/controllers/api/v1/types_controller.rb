class Api::V1::TypesController < ApplicationController
  def index
    @types = PokemonType.all 
  end

  def show
    @type = PokemonType.find(params[:id])
  end
end
