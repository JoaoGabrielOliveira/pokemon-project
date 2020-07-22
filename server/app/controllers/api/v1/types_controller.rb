class Api::V1::TypesController < ApplicationController
  def index
    if params[:offset].to_i > 0
        @types = PokemonType.all.drop(params[:offset].to_i)
    elsif params[:color] != nil
        @types = PokemonType.all.map(& :color)
    else 
        @types = PokemonType.all
    end


    if params[:limit].to_i > 0
        @types = @types.take(params[:limit].to_i)
    end

    if params[:order] != nil
        @types = @types.sort_by {|e| e[params[:order]]}
    end

end

def show
    begin
        @type = PokemonType.find(params[:id])
    rescue => exception
    end
end
end
