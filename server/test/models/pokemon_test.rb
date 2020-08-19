require 'test_helper'

class PokemonTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end 


  test "Teste para verificar se existem atributos em pokemon" do
    assert Pokemon.nil?
  end

  test "Teste para verificar se atributos existes" do
    pokemon = Pokemon.new
    assert Pokemon.any?
  end

  test "" do
    
  end
end
